(function(){
"use strict";
const ROOT=window.SS_ROOT||"";
const sectorsEl=document.getElementById("sd-sectors");
const countEl=document.getElementById("services-directory-count");
const searchEl=document.getElementById("sd-search");
const filterEl=document.getElementById("sd-category-filter");
let all=[],cats=[];
const tfn=(x)=>{if(!x)return "";if(typeof x==="string")return x;const lang=currentLang();return x[lang]||x.en||x.hi||"";};
function esc(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\\":"&quot;","'":"&#39;"}[c]));}
function href(s){return typeof ssServiceHref==="function"?ssServiceHref(ROOT,s):ROOT+"service/"+encodeURIComponent(s.slug)+".html";}
function currentLang(){return typeof getLang==="function"?getLang():"hi";}
function labels(){return currentLang()==="hi"?{popular:"लोकप्रिय सेवाएं",view:"सभी देखें",services:"सेवाएं",search:"सेवाएं, दस्तावेज़, नौकरी या योजना खोजें",all:"सभी श्रेणियां",empty:"कोई सेवा नहीं मिली",hint:"अपना खोज शब्द या श्रेणी बदलकर देखें।"}:{popular:"Popular services",view:"View all",services:"services",search:"Search services, documents, jobs or schemes",all:"All categories",empty:"No services found",hint:"Try a different search term or category."};}
function updateSearchUI(){const l=labels();if(searchEl)searchEl.placeholder=l.search;if(filterEl&&filterEl.options[0])filterEl.options[0].textContent=l.all;}
function render(){
 const l=labels(),q=(searchEl?.value||"").trim().toLowerCase(),selected=filterEl?.value||"";
 const filtered=all.filter(s=>{if(selected&&s.category!==selected)return false;const hay=[tfn(s.name),tfn(s.shortDescription),tfn(s.description),s.slug].join(" ").toLowerCase();return !q||hay.includes(q);});
 if(countEl)countEl.innerHTML=filtered.length+"<span>"+esc(l.services)+"</span>";
 if(!filtered.length){sectorsEl.innerHTML='<div class="sd-empty" role="status"><strong>'+esc(l.empty)+'</strong><span>'+esc(l.hint)+'</span></div>';return;}
 sectorsEl.innerHTML=cats.map(c=>{const categoryItems=filtered.filter(s=>s.category===c.slug);if(!categoryItems.length)return "";const total=all.filter(s=>s.category===c.slug).length;const items=categoryItems.slice(0,8);return '<section class="sd-sector" id="sector-'+esc(c.slug)+'"><a class="sd-category-panel" href="'+ROOT+"category/"+esc(c.slug)+'.html"><span class="sd-category-icon">'+esc(c.icon||"")+'</span><span class="sd-category-copy"><strong>'+esc(tfn(c.name))+'</strong><small>'+esc(tfn(c.description))+'</small></span><span class="sd-category-count">'+categoryItems.length+'<small>'+esc(l.services)+'</small></span><b aria-hidden="true">→</b></a><div class="sd-sector-services"><div class="sd-sector-services-head"><span>'+esc(l.popular)+'</span><a class="sd-sector-link" href="'+ROOT+"category/"+esc(c.slug)+'.html">'+esc(l.view)+" "+total+" →</a></div><div class="sd-grid">'+items.map(s=>'<a class="sd-card" href="'+href(s)+'" data-service-link="'+href(s)+'"><span class="sd-icon" aria-hidden="true">📌</span><span class="sd-card-copy"><strong>'+esc(tfn(s.name))+'</strong><small>'+esc(tfn(s.shortDescription||""))+'</small></span><b aria-hidden="true">→</b></a>').join("")+'</div></div></section>';}).join("");
}
function populateFilter(){if(!filterEl)return;const l=labels();filterEl.innerHTML='<option value="">'+esc(l.all)+"</option>"+cats.map(c=>'<option value="'+esc(c.slug)+'">'+esc(tfn(c.name))+"</option>").join("");}
Promise.all([
  fetch(ROOT+"data/services.json").then(r=>{if(!r.ok)throw new Error("services data failed");return r.json();}),
  fetch(ROOT+"data/categories.json").then(r=>{if(!r.ok)throw new Error("categories data failed");return r.json();})
]).then(([s,c])=>{
 all=Array.isArray(s)?s:(s&&Array.isArray(s.services)?s.services:[]);
 cats=Array.isArray(c)?c:(c&&Array.isArray(c.categories)?c.categories:[]);
 populateFilter();updateSearchUI();render();
 if(searchEl)searchEl.addEventListener("input",render);
 if(filterEl)filterEl.addEventListener("change",render);
 if(typeof onLangChange==="function")onLangChange(()=>{populateFilter();updateSearchUI();render();});
 const y=document.getElementById("footer-year");if(y)y.textContent=new Date().getFullYear();
 if(window.innerWidth<=768&&!document.querySelector(".ss-mobile-bottom-nav")){const n=document.createElement("nav");n.className="ss-mobile-bottom-nav";n.setAttribute("aria-label","Quick navigation");n.innerHTML='<a href="'+ROOT+'index.html">⌂<span>Home</span></a><a class="active" href="'+ROOT+'services/index.html">▦<span>Services</span></a><a href="'+ROOT+'jobs/index.html">💼<span>Jobs</span></a><a href="'+ROOT+'category/government-schemes.html">📜<span>Schemes</span></a><a href="'+ROOT+'tools/index.html">🛠️<span>Tools</span></a>';document.body.appendChild(n);}
}).catch((err)=>{console.error("Services directory load failed:",err);if(countEl)countEl.textContent="";if(sectorsEl)sectorsEl.innerHTML='<div class="sd-empty" role="alert"><strong>Services could not be loaded</strong><span>Please refresh the page.</span></div>';});