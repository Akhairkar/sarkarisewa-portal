/* Account auth UI. Supabase email OTP/magic-link flow; no password is stored by the site. */
(function(){
"use strict";
const form=document.getElementById("auth-form"), email=document.getElementById("email"), btn=document.getElementById("submit"), status=document.getElementById("status");
if(!form)return;
const params=new URLSearchParams(location.search);
const returnTo=params.get("return")||"";
function safeReturn(v){try{const u=new URL(v,location.origin);return u.origin===location.origin&&u.pathname.startsWith("/")?u.pathname+u.search+u.hash:"";}catch(e){return ""}}
function show(msg){status.textContent=msg;status.classList.add("show")}
(async function(){
 try{const c=await getSupabaseClient();if(c){const {data}=await c.auth.getSession();if(data.session&&returnTo)location.href=safeReturn(returnTo)||"dashboard.html";}}
 catch(e){}
})();
form.addEventListener("submit",async e=>{
 e.preventDefault();const value=email.value.trim();if(!value)return;
 btn.disabled=true;show("Secure link bheja ja raha hai…");
 try{
  const c=await getSupabaseClient();if(!c)throw new Error("Supabase unavailable");
  const destination=location.origin+location.pathname+(returnTo?"?return="+encodeURIComponent(safeReturn(returnTo)):"");
  const {error}=await c.auth.signInWithOtp({email:value,options:{emailRedirectTo:destination}});
  if(error)throw error;
  show("Link bhej diya gaya hai. Apna email check karein aur secure link open karein.");
 }catch(err){console.error(err);show("Abhi account service available nahi hai. Thodi der baad dobara try karein.");}
 finally{btn.disabled=false}
});
})();