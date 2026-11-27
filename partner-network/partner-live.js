(() => {
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const labels = {offered:'New',accepted:'Accepted',rejected:'Rejected',contacted:'Contacted',in_progress:'In progress',completed:'Completed',disputed:'Under review',invalid:'Invalid',expired:'Expired'};
  const transitions = {
    offered:[['accepted','Accept lead'],['rejected','Decline']],
    accepted:[['contacted','Mark contacted'],['in_progress','Start work'],['disputed','Raise dispute']],
    contacted:[['in_progress','Start work'],['disputed','Raise dispute']],
    in_progress:[['completed','Mark completed'],['disputed','Raise dispute']]
  };
  const moneySafeDate = value => value ? new Date(value).toLocaleString('en-IN',{dateStyle:'medium',timeStyle:'short'}) : '—';
  window.loadPartnerDashboard = async client => {
    const {data,error}=await client.rpc('partner_get_dashboard_data');
    if(error || !data) throw new Error(error?.message || 'Dashboard data unavailable');
    const gate=document.getElementById('accessGate');
    gate.innerHTML='';
    gate.className='live-dashboard';
    const p=data.profile||{}, q=data.entitlement||{}, s=data.stats||{}, leads=Array.isArray(data.leads)?data.leads:[];
    gate.innerHTML=`
      <header class="live-top"><div><span class="live-brand">ss<span>.</span> partner studio</span><p>Secure partner workspace</p></div><button id="liveSignOut" type="button">Sign out</button></header>
      <main class="live-wrap">
        <div class="live-welcome"><div><span class="live-kicker">PARTNER OVERVIEW</span><h1>Welcome, ${esc(p.owner_name||p.business_name||'Partner')}</h1><p>${esc(p.business_name||'Your business')} · ${esc([p.district,p.state].filter(Boolean).join(', '))}</p></div><span class="live-approved">Verified partner</span></div>
        <section class="live-stats">
          <article><small>Total assigned leads</small><b>${Number(s.total)||0}</b></article>
          <article><small>New offers</small><b>${Number(s.offered)||0}</b></article>
          <article><small>In progress</small><b>${Number(s.in_progress)||0}</b></article>
          <article><small>Completed</small><b>${Number(s.completed)||0}</b></article>
        </section>
        <section class="live-quota"><div><span class="live-kicker">STARTER BENEFIT</span><h2>Free lead balance</h2><p>${Number(q.free_leads_used)||0} used of ${Number(q.free_leads_granted)||10} granted</p></div><div class="live-balance"><b>${Number(q.free_leads_remaining)||0}</b><span>remaining</span></div></section>
        <section class="live-leads"><div class="live-section-head"><div><span class="live-kicker">CUSTOMER CONNECTIONS</span><h2>My assigned leads</h2></div><span>${leads.length} shown · latest 50</span></div>
          ${leads.length ? leads.map(lead=>`<article class="live-lead" data-assignment="${esc(lead.assignment_id)}"><div class="live-lead-head"><div><b>${esc(lead.customer_name)}</b><small>${esc(lead.service_name)} · ${esc([lead.district,lead.state].filter(Boolean).join(', '))}</small></div><span class="live-status">${esc(labels[lead.status]||lead.status)}</span></div><p>${esc(lead.customer_details||'No additional details provided.')}</p><div class="live-contact"><a href="tel:${esc(lead.customer_phone)}">${esc(lead.customer_phone)}</a><small>Assigned ${esc(moneySafeDate(lead.assigned_at))}</small></div><div class="live-actions">${(transitions[lead.status]||[]).map(([status,label])=>`<button type="button" data-status="${status}" data-id="${esc(lead.assignment_id)}">${label}</button>`).join('')}</div></article>`).join('') : '<div class="live-empty"><b>No leads assigned yet</b><p>When a matching customer enquiry is assigned to your verified partner account, it will appear here.</p></div>'}
        </section>
        <p class="live-foot">Customer contact details are displayed only for leads assigned to your account. Handle customer information responsibly.</p>
      </main>`;
    document.getElementById('liveSignOut').addEventListener('click',async()=>{const b=document.getElementById('liveSignOut');b.disabled=true;const out=await client.auth.signOut();if(out.error){b.disabled=false;alert('Sign out failed. Please retry.');}else location.replace('./auth.html');});
    gate.querySelectorAll('[data-status]').forEach(button=>button.addEventListener('click',async()=>{
      button.disabled=true;
      const {error}=await client.rpc('partner_update_lead_status',{p_assignment_id:button.dataset.id,p_new_status:button.dataset.status,p_note:null});
      if(error){button.disabled=false;alert('Could not update this lead. '+error.message);return;}
      await window.loadPartnerDashboard(client);
    }));
  };
})();