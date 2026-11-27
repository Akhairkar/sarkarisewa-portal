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
    const [{data,error},{data:noticeData,error:noticeError}]=await Promise.all([
      client.rpc('partner_get_dashboard_data'),
      client.rpc('partner_get_notifications',{p_limit:30})
    ]);
    if(error || !data) throw new Error(error?.message || 'Dashboard data unavailable');
    const gate=document.getElementById('accessGate');
    gate.innerHTML='';
    gate.className='live-dashboard';
    const p=data.profile||{}, q=data.entitlement||{}, s=data.stats||{}, leads=Array.isArray(data.leads)?data.leads:[];
    const notices=noticeError?[]:(Array.isArray(noticeData?.notifications)?noticeData.notifications:[]);
    const unread=Number(noticeData?.unread_count)||0;
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
        <section class="live-notifications" aria-labelledby="liveNotificationsTitle">
          <div class="live-section-head"><div><span class="live-kicker">STAY UPDATED</span><h2 id="liveNotificationsTitle">Notifications <span class="live-unread">${unread} unread</span></h2></div><button type="button" id="refreshNotifications">Refresh</button></div>
          ${noticeError?'<div class="live-empty"><b>Notifications unavailable</b><p>Please refresh later. Your assigned leads are still available below.</p></div>':notices.length?notices.map(n=>`<article class="live-notice ${n.read_at?'is-read':'is-unread'}"><div class="live-notice-dot" aria-hidden="true"></div><div class="live-notice-copy"><b>${esc(n.title)}</b><p>${esc(n.body)}</p><small>${esc(moneySafeDate(n.created_at))}</small></div><div class="live-notice-actions">${n.read_at?'<span class="live-read-label">Read</span>':`<button type="button" data-notice-read="${esc(n.id)}" data-assignment-target="${esc(n.assignment_id)}">Mark read</button>`}<button type="button" class="live-open-lead" data-open-assignment="${esc(n.assignment_id)}">View lead</button></div></article>`).join(''):'<div class="live-empty"><b>You’re all caught up</b><p>New lead assignment alerts will appear here.</p></div>'}
        </section>
        <section class="live-leads"><div class="live-section-head"><div><span class="live-kicker">CUSTOMER CONNECTIONS</span><h2>My assigned leads</h2></div><span>${leads.length} shown · latest 50</span></div>
          ${leads.length ? leads.map(lead=>`<article class="live-lead" id="lead-${esc(lead.assignment_id)}" data-assignment="${esc(lead.assignment_id)}"><div class="live-lead-head"><div><b>${esc(lead.customer_name)}</b><small>${esc(lead.service_name)} · ${esc([lead.district,lead.state].filter(Boolean).join(', '))}</small></div><span class="live-status">${esc(labels[lead.status]||lead.status)}</span></div><p>${esc(lead.customer_details||'No additional details provided.')}</p><div class="live-contact"><a href="tel:${esc(lead.customer_phone)}">${esc(lead.customer_phone)}</a><small>Assigned ${esc(moneySafeDate(lead.assigned_at))}</small></div><div class="live-actions">${(transitions[lead.status]||[]).map(([status,label])=>`<button type="button" data-status="${status}" data-id="${esc(lead.assignment_id)}">${label}</button>`).join('')}</div></article>`).join('') : '<div class="live-empty"><b>No leads assigned yet</b><p>When a matching customer enquiry is assigned to your verified partner account, it will appear here.</p></div>'}
        </section>
        <p class="live-foot">Customer contact details are displayed only for leads assigned to your account. Handle customer information responsibly.</p>
      </main>`;
    document.getElementById('liveSignOut').addEventListener('click',async()=>{const b=document.getElementById('liveSignOut');b.disabled=true;const out=await client.auth.signOut();if(out.error){b.disabled=false;alert('Sign out failed. Please retry.');}else location.replace('./auth.html');});
    document.getElementById('refreshNotifications').addEventListener('click',()=>window.loadPartnerDashboard(client));
    gate.querySelectorAll('[data-notice-read]').forEach(button=>button.addEventListener('click',async()=>{
      button.disabled=true;
      const {data,error}=await client.rpc('partner_mark_notification_read',{p_notification_id:button.dataset.noticeRead});
      if(error||!data?.success){button.disabled=false;alert('Could not mark this notification as read. '+(error?.message||''));return;}
      await window.loadPartnerDashboard(client);
    }));
    gate.querySelectorAll('[data-open-assignment]').forEach(button=>button.addEventListener('click',()=>{
      const target=document.getElementById('lead-'+button.dataset.openAssignment);
      if(target){target.scrollIntoView({behavior:'smooth',block:'center'});target.classList.add('live-lead-highlight');}
      else alert('This lead is not in the latest 50. Open My assigned leads or refresh the dashboard.');
    }));
    gate.querySelectorAll('[data-status]').forEach(button=>button.addEventListener('click',async()=>{
      button.disabled=true;
      const {error}=await client.rpc('partner_update_lead_status',{p_assignment_id:button.dataset.id,p_new_status:button.dataset.status,p_note:null});
      if(error){button.disabled=false;alert('Could not update this lead. '+error.message);return;}
      await window.loadPartnerDashboard(client);
    }));
  };
})();