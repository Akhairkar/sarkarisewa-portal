(() => {
 const cfg=window.PARTNER_SUPABASE_CONFIG||window.SUPABASE_CONFIG;
 const loginPanel=document.getElementById('loginPanel'),app=document.getElementById('adminApp'),notice=document.getElementById('loginNotice'),signOut=document.getElementById('signOut');
 let client=null,partners=[];
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