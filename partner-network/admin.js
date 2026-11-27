(() => {
 const cfg=window.PARTNER_SUPABASE_CONFIG||window.SUPABASE_CONFIG;
 const loginPanel=document.getElementById('loginPanel'),app=document.getElementById('adminApp'),notice=document.getElementById('loginNotice'),signOut=document.getElementById('signOut');
 let client=null,partners=[],leads=[];
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const statusOf=p=>p.verification_status==='rejected'?'rejected':p.account_status;
 function tell(msg){notice.textContent=msg;}
 function statusTag(p){const s=statusOf(p);return '<span class="tag '+esc(s)+'">'+esc(s)+' · '+esc(p.verification_status)+'</span>';}
 function render(){
  const q=document.getElementById('searchPartners').value.trim().toLowerCase(),f=document.getElementById('statusFilter').value;
  const rows=partners.filter(p=>(f==='all'||statusOf(p)===f)&&[p.business_name,p.owner_name,p.email,p.phone,p.state,p.district].some(v=>String(v||'').toLowerCase().includes(q)));
  const target=document.getElementById('partnerList');
  if(!rows.length){target.innerHTML='<div class="empty">No partners match this filter.</div>';return;}
  target.innerHTML=rows.map(p=>{
   const approved=p.account_status==='active'&&p.verification_status==='verified',rejected=p.verification_status==='rejected',suspended=p.account_status==='suspended';
   const actions=approved?'<button data-action="suspend" data-id="'+esc(p.user_id)+'" class="danger">Suspend</button>':suspended?'<button data-action="reactivate" data-id="'+esc(p.user_id)+'" class="primary small">Reactivate</button>':rejected?'<button data-action="approve" data-id="'+esc(p.user_id)+'" class="primary small">Approve</button>':'<button data-action="approve" data-id="'+esc(p.user_id)+'" class="primary small">Approve & activate</button><button data-action="reject" data-id="'+esc(p.user_id)+'" class="danger">Reject</button>';
   return '<article class="partner-row"><div class="partner-main"><div class="partner-avatar">'+esc((p.business_name||'P').slice(0,1).toUpperCase())+'</div><div class="partner-info"><div class="partner-title">'+esc(p.business_name)+' '+statusTag(p)+'</div><p>'+esc(p.owner_name)+' · '+esc(p.partner_type)+'</p><p>'+esc(p.email)+' · '+esc(p.phone)+'</p><p>'+esc([p.district,p.state].filter(Boolean).join(', '))+' · '+esc(p.partner_origin)+'</p><small>Joined '+esc(new Date(p.created_at).toLocaleDateString('en-IN'))+' · Free leads '+Number(p.free_leads_used||0)+' / '+Number(p.free_leads_granted||10)+' · '+esc(p.premium_status||'not_eligible')+'</small></div></div><div class="partner-actions">'+actions+'</div></article>';
  }).join('');
 }
 async function load(){
  document.getElementById('partnerList').innerHTML='<div class="loading">Refreshing directory…</div>';
  const {data,error}=await client.rpc('partner_admin_get_overview');
  if(error){document.getElementById('partnerList').innerHTML='<div class="empty">Unable to load partner directory. '+esc(error.message)+'</div>';return;}
  partners=Array.isArray(data.partners)?data.partners:[];
  const s=data.stats||{};['total','pending','active','suspended'].forEach(k=>document.getElementById(k+'Count').textContent=Number(s[k])||0);
  render();
  await loadLeads();
 }
 function renderLeads(){
  const q=document.getElementById('searchLeads').value.trim().toLowerCase();
  const f=document.getElementById('leadStatusFilter').value;
  const rows=leads.filter(l=>(f==='all'||l.lead_status===f)&&[
   l.customer_name,l.customer_phone,l.service_name,l.state,l.district,
   l.partner_business_name,l.partner_phone,l.id
  ].some(v=>String(v||'').toLowerCase().includes(q)));
  const target=document.getElementById('leadList');
  if(!rows.length){target.innerHTML='<div class="empty">No customer enquiries match this filter.</div>';return;}
  target.innerHTML=rows.map(l=>{
   const assigned=!!l.assignment_id;
   const partner=assigned
    ? '<p><b>Assigned to:</b> '+esc(l.partner_business_name||'Partner')+' · '+esc(l.partner_phone||'')+' · '+esc(l.assignment_status||'offered')+'</p>'
    : '<p class="unmatched-note">Not assigned · waiting for an eligible verified partner</p>';
   const retry=l.lead_status==='new'&&!assigned
    ? '<button data-lead-action="retry" data-id="'+esc(l.id)+'" class="primary small">Retry matching</button>'
    : '';
   return '<article class="partner-row"><div class="partner-main"><div class="partner-avatar">L</div><div class="partner-info"><div class="partner-title">'+esc(l.customer_name)+' <span class="tag '+esc(l.lead_status)+'">'+esc(l.lead_status)+'</span></div><p>'+esc(l.customer_phone)+' · '+esc(l.service_name)+'</p><p>'+esc([l.district,l.state].filter(Boolean).join(', '))+' · '+esc(l.page_path)+'</p>'+partner+(l.customer_details?'<p><b>Details:</b> '+esc(l.customer_details)+'</p>':'')+'<small>Received '+esc(new Date(l.created_at).toLocaleString('en-IN'))+' · Ref '+esc(l.id)+'</small></div></div><div class="partner-actions">'+retry+'</div></article>';
  }).join('');
 }
 async function loadLeads(){
  const target=document.getElementById('leadList');
  target.innerHTML='<div class="loading">Loading customer enquiries…</div>';
  const {data,error}=await client.rpc('partner_admin_get_leads',{p_status:document.getElementById('leadStatusFilter').value,p_limit:200});
  if(error){target.innerHTML='<div class="empty">Unable to load customer enquiries. '+esc(error.message)+'</div>';return;}
  leads=Array.isArray(data)?data:[];
  renderLeads();
 }
 async function enter(){
  const {data,error}=await client.rpc('partner_admin_is_authorized');
  if(error||data!==true){loginPanel.hidden=false;app.hidden=true;signOut.hidden=false;tell('This account is not on the admin allowlist. Access denied.');return;}
  loginPanel.hidden=true;app.hidden=false;signOut.hidden=false;await load();
 }
 document.getElementById('loginForm').addEventListener('submit',async e=>{e.preventDefault();if(!client)return tell('Supabase configuration is missing.');const b=e.submitter;b.disabled=true;tell('Signing in…');const {error}=await client.auth.signInWithPassword({email:document.getElementById('email').value.trim(),password:document.getElementById('password').value});b.disabled=false;if(error)return tell(error.message);await enter();});
 signOut.addEventListener('click',async()=>{if(client)await client.auth.signOut();location.reload();});
 document.getElementById('refresh').addEventListener('click',load);
 document.getElementById('searchPartners').addEventListener('input',render);
 document.getElementById('statusFilter').addEventListener('change',render);
 document.getElementById('searchLeads').addEventListener('input',renderLeads);
 document.getElementById('leadStatusFilter').addEventListener('change',loadLeads);
 document.getElementById('refreshLeads').addEventListener('click',loadLeads);
 document.getElementById('leadList').addEventListener('click',async e=>{
  const b=e.target.closest('[data-lead-action="retry"]');if(!b)return;
  const lead=leads.find(x=>x.id===b.dataset.id);if(!lead)return;
  if(!window.confirm('Retry matching for this new enquiry from '+lead.customer_name+'?'))return;
  b.disabled=true;
  const {data,error}=await client.rpc('partner_admin_retry_lead',{p_lead_id:lead.id});
  if(error){window.alert('Retry failed: '+error.message);b.disabled=false;return;}
  window.alert(data?.assigned?'Lead successfully assigned to an eligible partner.':('No assignment: '+(data?.reason||'No eligible partner found.')));
  await loadLeads();
 });
 document.getElementById('partnerList').addEventListener('click',async e=>{
  const b=e.target.closest('[data-action]');if(!b)return;
  const action=b.dataset.action,partnerId=b.dataset.id;
  const p=partners.find(x=>x.user_id===partnerId);if(!p)return;
  const confirmText={approve:'Approve and activate '+p.business_name+'?',reject:'Reject registration for '+p.business_name+'?',suspend:'Suspend '+p.business_name+'?',reactivate:'Reactivate '+p.business_name+'?'}[action];
  if(!window.confirm(confirmText))return;
  const note=window.prompt('Optional admin note (max 500 characters):','')||null;
  b.disabled=true;
  const {error}=await client.rpc('partner_admin_review_partner',{p_partner_id:partnerId,p_decision:action,p_note:note});
  if(error){window.alert('Action failed: '+error.message);b.disabled=false;return;}
  await load();
 });
 if(!cfg||!cfg.url||!cfg.publishableKey||/YOUR_SUPABASE/.test(cfg.url+cfg.publishableKey)){tell('Supabase project URL and publishable key are not configured yet.');return;}
 client=window.supabase.createClient(cfg.url,cfg.publishableKey);
 client.auth.getSession().then(({data,error})=>{if(error)return tell(error.message);if(data.session)enter();});
 client.auth.onAuthStateChange((event,session)=>{if(event==='SIGNED_OUT'){app.hidden=true;loginPanel.hidden=false;signOut.hidden=true;}else if(event==='SIGNED_IN'&&session)enter();});
})();