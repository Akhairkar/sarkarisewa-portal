// admin-common.js
// Shared admin shell: sidebar navigation + login guard.
// The admin panel is for viewing data only — it does not create or publish pages.

(function () {
  const NAV = [
    ["dashboard.html", "📊 Overview"],
    ["content.html", "🗂️ Content Inventory"],
    ["content-review.html", "📝 Content Review Queue"],
    ["access-control.html", "🔐 Access Control"],
    ["security-audit.html", "🛡️ Security Audit"],
    ["seo.html", "🔎 SEO Control Center"],
    ["api-payments.html", "🔌 API & Payments"],
    ["analytics.html", "📈 Analytics"],
    ["health.html", "🩺 System Health"],
    ["backup.html", "💾 Backup & Recovery"],
    ["alerts.html", "🔔 Alert Center"],
    ["subscribers.html", "📬 Subscribers"],
    ["csc.html", "🏬 CSC Claims"],
    ["sahayak.html", "🤝 Seva Sahayak"],
    ["solar.html", "☀️ Solar Leads"],
    ["rc-reports.html", "🚗 RC Challan Reports"],
    ["posters.html", "🖼️ Daily Posters"],
    ["push.html", "🔔 Notifications"],
    ["searches.html", "🔍 Site Searches"],
    ["requests.html", "🙋 Service Requests"],
    ["activity.html", "🧾 Activity Logs"],
    ["revenue.html", "💰 Revenue & AdSense"],
    ["membership.html", "⭐ Premium Membership"],
    ["membership-lifecycle.html", "⏳ Membership Lifecycle"],
  ];

  function renderNav() {
    const nav = document.querySelector(".admin-nav");
    if (!nav) return;
    const current = location.pathname.split("/").pop() || "dashboard.html";
    nav.innerHTML = NAV.map(([href, label]) =>
      `<a href="${href}" class="admin-nav-item${href === current ? " active" : ""}">${label}</a>`
    ).join("");
  }

  // Global admin command palette: navigation search + safe page shortcuts.
  function installAdminCommandPalette() {
    if (document.getElementById("admin-command-root")) return;
    const style = document.createElement("style");
    style.textContent = `
      #admin-command-root{position:fixed;inset:0;z-index:9999;display:none;align-items:flex-start;justify-content:center;padding:12vh 16px 24px;background:rgba(3,8,20,.68);backdrop-filter:blur(7px)}
      #admin-command-root.open{display:flex}
      #admin-command-panel{width:min(620px,100%);max-height:min(76vh,720px);overflow:hidden;border:1px solid var(--admin-border);border-radius:18px;background:var(--admin-surface);box-shadow:0 28px 90px rgba(0,0,0,.38);color:var(--admin-text-main)}
      #admin-command-head{padding:16px;border-bottom:1px solid var(--admin-border)}
      #admin-command-input{width:100%;box-sizing:border-box;padding:13px 14px;border:1px solid var(--admin-border);border-radius:11px;background:var(--admin-bg-subtle);color:var(--admin-text-main);font:inherit;outline:none}
      #admin-command-input:focus{border-color:var(--admin-primary);box-shadow:0 0 0 3px var(--admin-primary-glow)}
      #admin-command-hint{font-size:11px;color:var(--admin-text-muted);margin-top:9px}
      #admin-command-results{padding:8px;overflow:auto;max-height:52vh}
      .admin-command-group{padding:8px 9px 5px;color:var(--admin-text-muted);font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}
      .admin-command-item{display:flex;width:100%;gap:12px;align-items:center;padding:11px 12px;border:0;border-radius:10px;background:transparent;color:var(--admin-text-main);text-align:left;font:inherit;cursor:pointer}
      .admin-command-item:hover,.admin-command-item:focus{background:var(--admin-surface-hover);outline:none}
      .admin-command-item small{display:block;color:var(--admin-text-muted);font-size:11px;margin-top:2px}
      #admin-command-empty{padding:24px 12px;text-align:center;color:var(--admin-text-muted);font-size:13px}
      #admin-command-trigger{position:fixed;right:22px;bottom:22px;z-index:1500;display:flex;align-items:center;gap:9px;padding:11px 14px;border:1px solid var(--admin-border);border-radius:13px;background:var(--admin-surface);color:var(--admin-text-main);box-shadow:var(--admin-shadow);font:600 13px inherit;cursor:pointer}
      #admin-command-trigger kbd{padding:2px 5px;border:1px solid var(--admin-border);border-radius:5px;color:var(--admin-text-muted);font:11px monospace}
      @media(max-width:600px){#admin-command-root{padding:7vh 10px 16px}#admin-command-trigger{right:12px;bottom:12px;padding:10px 12px}}
      @media(prefers-reduced-motion:no-preference){#admin-command-panel{animation:adminCommandIn .14s ease-out}@keyframes adminCommandIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}}
    `;
    document.head.appendChild(style);
    const root=document.createElement("div");root.id="admin-command-root";root.setAttribute("aria-hidden","true");
    root.innerHTML='<section id="admin-command-panel" role="dialog" aria-modal="true" aria-label="Admin global search"><div id="admin-command-head"><input id="admin-command-input" type="search" autocomplete="off" placeholder="Search admin pages and actions…" aria-label="Search admin pages and actions"><div id="admin-command-hint">Navigate with ↑ ↓ · Open with Enter · Close with Esc · Shortcut Ctrl/⌘ K</div></div><div id="admin-command-results" role="listbox"></div></section>';
    document.body.appendChild(root);
    const trigger=document.createElement("button");trigger.id="admin-command-trigger";trigger.type="button";trigger.innerHTML='⌕ <span>Quick search</span> <kbd>Ctrl K</kbd>';trigger.addEventListener("click",open);document.body.appendChild(trigger);
    const input=root.querySelector("#admin-command-input"),results=root.querySelector("#admin-command-results");
    const actions=[
      {label:"System Health Monitor",href:"health.html",detail:"Review admin-side system checks"},
      {label:"Backup & Recovery",href:"backup.html",detail:"Review backup readiness and recovery steps"},
      {label:"Notification & Alert Center",href:"alerts.html",detail:"Review payment, push, request and audit counts"},
      {label:"API & Payment Operations",href:"api-payments.html",detail:"Inspect payment and RC report records"},
      {label:"Admin Activity Logs",href:"activity.html",detail:"Review administrator audit entries"},
      {label:"Content Review Queue",href:"content-review.html",detail:"Review pending content changes"},
      {label:"Service Requests",href:"requests.html",detail:"Review incoming service requests"},
      {label:"Premium Membership",href:"membership.html",detail:"Review membership records"}
    ];
    let items=[],active=0;
    function allItems(q){
      const query=q.trim().toLocaleLowerCase();
      const pages=NAV.map(([href,label])=>({label:label.replace(/^\S+\s/,""),icon:label.split(" ")[0],href,detail:"Admin page",group:"Pages"}));
      const shortcuts=actions.map(x=>({...x,icon:"↗",group:"Quick actions"}));
      let list=[...shortcuts,...pages];
      if(query)list=list.filter(x=>(x.label+" "+x.href+" "+x.detail).toLocaleLowerCase().includes(query));
      return list.slice(0,30);
    }
    function render(){
      items=allItems(input.value);active=Math.min(active,Math.max(0,items.length-1));
      if(!items.length){results.innerHTML='<div id="admin-command-empty">No matching admin page or action.</div>';return;}
      let html="",last="";
      items.forEach((x,i)=>{if(x.group!==last){html+='<div class="admin-command-group">'+x.group+'</div>';last=x.group;}
        html+='<button type="button" class="admin-command-item" role="option" aria-selected="'+(i===active)+'" data-index="'+i+'"><span aria-hidden="true">'+adminEsc(x.icon)+'</span><span><strong>'+adminEsc(x.label)+'</strong><small>'+adminEsc(x.detail)+' · '+adminEsc(x.href)+'</small></span></button>';});
      results.innerHTML=html;
      results.querySelectorAll("[data-index]").forEach(btn=>{btn.addEventListener("mouseenter",()=>{active=Number(btn.dataset.index);highlight();});btn.addEventListener("click",()=>go(items[Number(btn.dataset.index)]));});
    }
    function highlight(){results.querySelectorAll("[data-index]").forEach(b=>b.setAttribute("aria-selected",String(Number(b.dataset.index)===active)));}
    function open(){root.classList.add("open");root.setAttribute("aria-hidden","false");input.value="";active=0;render();setTimeout(()=>input.focus(),0);}
    function close(){root.classList.remove("open");root.setAttribute("aria-hidden","true");trigger.focus();}
    function go(item){if(!item)return;try{const old=JSON.parse(sessionStorage.getItem("admin_recent_pages")||"[]");const next=[item.href,...old.filter(x=>x!==item.href)].slice(0,5);sessionStorage.setItem("admin_recent_pages",JSON.stringify(next));}catch(_){}location.href=item.href;}
    input.addEventListener("input",()=>{active=0;render();});
    input.addEventListener("keydown",e=>{if(e.key==="ArrowDown"){e.preventDefault();active=Math.min(active+1,items.length-1);highlight();}else if(e.key==="ArrowUp"){e.preventDefault();active=Math.max(active-1,0);highlight();}else if(e.key==="Enter"){e.preventDefault();go(items[active]);}else if(e.key==="Escape"){e.preventDefault();close();}});
    root.addEventListener("mousedown",e=>{if(e.target===root)close();});
    document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();open();}else if(e.key==="Escape"&&root.classList.contains("open"))close();});
  }

  // Resolves to a logged-in Supabase client, or redirects to login.
  window.adminGuard = async function () {
    const client = await getSupabaseClient();
    const loading = document.getElementById("dash-loading");
    if (!client) {
      if (loading) loading.innerHTML = "<p class='loading'>Backend not configured.</p>";
      throw new Error("Backend not configured");
    }
    const { data, error } = await client.auth.getSession();
    if (error || !data || !data.session) {
      location.href = "login.html";
      throw new Error("Not logged in");
    }

    // Only trusted app_metadata can grant admin access. user_metadata is
    // user-editable and must never be used for authorization.
    const appRole = data.session.user?.app_metadata?.role;
    if (appRole !== "admin") {
      if (loading) loading.innerHTML = "<p class='loading'>This account does not have admin access.</p>";
      const wrap = document.getElementById("dash-wrap");
      if (wrap) wrap.hidden = true;
      throw new Error("Admin role required");
    }

    const who = document.getElementById("whoami");
    if (who) who.textContent = "Logged in as " + data.session.user.email;
    const logout = document.getElementById("logout");
    if (logout && !logout.dataset.bound) {
      logout.dataset.bound = "1";
      logout.addEventListener("click", async () => {
        await client.auth.signOut();
        location.href = "login.html";
      });
    }
    if (loading) loading.hidden = true;
    const wrap = document.getElementById("dash-wrap");
    if (wrap) wrap.hidden = false;
    installAdminCommandPalette();
    await window.adminLog(client, "page_view", location.pathname.split("/").pop());
    return client;
  };

  // Best-effort audit trail. Store only the admin identity and page/action metadata;
  // never record form values, customer details, tokens, or request payloads.
  window.adminLog = async function (client, action, resource) {
    try {
      const { data } = await client.auth.getUser();
      const user = data?.user;
      if (!user || user.app_metadata?.role !== "admin") return;
      const { error } = await client.from("admin_activity_logs").insert({
        actor_id: user.id,
        actor_email: user.email || null,
        action: String(action || "view").slice(0, 40),
        resource: String(resource || location.pathname.split("/").pop() || "admin").slice(0, 120)
      });
      if (error) console.warn("Admin activity log was not saved:", error.message);
    } catch (error) {
      console.warn("Admin activity logging unavailable:", error);
    }
  };

  window.adminEsc = function (v) {
    const d = document.createElement("div");
    d.textContent = v == null ? "" : String(v);
    return d.innerHTML;
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", renderNav);
  else renderNav();
})();
