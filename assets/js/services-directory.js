(function(){
 const ROOT=window.SS_ROOT||"";
 const listEl=document.getElementById("services-directory-list");
 const countEl=document.getElementById("services-directory-count");
 const input=document.getElementById("services-directory-search");
 const filter=document.getElementById("services-directory-filter");
 let all=[],cats=[];
 const tfn=typeof t==="function"?t:(x)=>typeof x==="object"?x.en||x.hi||"":x;
 function esc(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));}
 function render(){
   const q=(input.value||"").trim().toLowerCase();
   const cat=filter.value;
   let items=all.filter(s=>!cat||s.category===cat);
   if(q) items=items.filter(s=>[s.name?.en,s.name?.hi,s.shortDescription?.en,s.shortDescription?.hi,s.slug].filter(Boolean).join(" ").toLowerCase().includes(q));
   countEl.textContent=items.length+" services";
   listEl.innerHTML=items.length?items.map(s=>'<a class="sd-card" href="'+(typeof ssServiceHref==="function"?ssServiceHref(ROOT,s):ROOT+"service/"+s.slug+".html")+'"><span class="sd-icon">📌</span><span><strong>'+esc(tfn(s.name))+'</strong><small>'+esc(tfn(s.shortDescription||""))+'</small><em>'+esc(s.category||"")+'</em></span><b>→</b></a>').join(""):'<div class="sd-empty">No matching services found. Try another keyword or category.</div>';
 }
 Promise.all([typeof fetchAllServices==="function"?fetchAllServices():fetch(ROOT+"data/services.json").then(r=>r.json()),fetch(ROOT+"data/categories.json").then(r=>r.json())]).then(([s,c])=>{
   all=Array.isArray(s)?s:(s.services||[]); cats=Array.isArray(c)?c:(c.categories||[]);
   filter.innerHTML='<option value="">All Categories</option>'+cats.map(x=>'<option value="'+esc(x.slug)+'">'+esc(tfn(x.name))+'</option>').join("");
   render();
   input.addEventListener("input",render);filter.addEventListener("change",render);
   if(typeof onLangChange==="function") onLangChange(render);
 }).catch(()=>{countEl.textContent="Unable to load services";});
})();