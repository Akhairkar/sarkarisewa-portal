/* Account auth UI. Supabase email OTP/magic-link flow; no password is stored by the site. */
(function(){
"use strict";
const form=document.getElementById("auth-form"), email=document.getElementById("email"), phone=document.getElementById("phone"), serviceUpdates=document.getElementById("service-updates"), btn=document.getElementById("submit"), status=document.getElementById("status");
if(!form)return;
const params=new URLSearchParams(location.search);
const returnTo=params.get("return")||"";
function safeReturn(v){try{const u=new URL(v,location.origin);return u.origin===location.origin&&u.pathname.startsWith("/")?u.pathname+u.search+u.hash:"";}catch(e){return ""}}
function show(msg){status.textContent=msg;status.classList.add("show")}
form.addEventListener("submit",async e=>{
 e.preventDefault();
 const value=email.value.trim();
 const phoneValue=phone?phone.value.replace(/\D/g,""):"";
 if(!value)return;
 if(window.SS_AUTH_MODE==="signup"&&!/^[6-9]\d{9}$/.test(phoneValue)){
  show("Valid 10-digit Indian mobile number enter karein.");
  if(phone)phone.focus();
  return;
 }
 btn.disabled=true;show("Secure link bheja ja raha hai…");
 try{
  const c=await getSupabaseClient();if(!c)throw new Error("Supabase unavailable");
  const destination=location.origin+"/account/auth-callback.html"+(returnTo?"?return="+encodeURIComponent(safeReturn(returnTo)):"");
  const options={emailRedirectTo:destination};
  if(window.SS_AUTH_MODE==="signup") options.data={phone_number:phoneValue,email_service_updates:!!(serviceUpdates&&serviceUpdates.checked)};
  const {error}=await c.auth.signInWithOtp({email:value,options});
  if(error)throw error;
  show("Link bhej diya gaya hai. Apna email check karein aur secure link open karein.");
 }catch(err){console.error(err);show("Abhi account service available nahi hai. Thodi der baad dobara try karein.");}
 finally{btn.disabled=false}
});
})();