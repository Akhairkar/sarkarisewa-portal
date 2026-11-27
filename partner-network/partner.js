(() => {
  const sidebar = document.getElementById('sidebar');
  const toast = document.getElementById('toast');
  const crumb = document.getElementById('crumb');
  const title = document.getElementById('pageTitle');
  const subtitle = document.getElementById('pageSubtitle');
  let toastTimer;
  const views = {
    overview: ['Overview', 'Good morning, Akash ✦', 'Here’s what’s happening with your business today.'],
    leads: ['My leads', 'Your customer connections', 'Keep every conversation moving forward.'],
    services: ['My services', 'Show what you do best', 'Help the right customers discover your services.'],
    insights: ['Insights', 'Your growth at a glance', 'Understand what is working and where to improve.'],
    profile: ['Business profile', 'Make your business stand out', 'A complete profile helps customers choose with confidence.'],
    notifications: ['Notifications', 'Stay in the loop', 'Important updates and new opportunities, all in one place.'],
    plans: ['Plans & benefits', 'More room to grow', 'Build your track record and unlock partner benefits.'],
    settings: ['Settings', 'Your workspace, your way', 'Manage your account and notification preferences.']
  };
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
  }
  function setView(view) {
    const data = views[view] || views.overview;
    crumb.textContent = data[0];
    title.textContent = data[1];
    subtitle.textContent = data[2];
    document.querySelectorAll('.nav-link').forEach(button => button.classList.toggle('active', button.dataset.view === view));
    sidebar.classList.remove('open');
    if (view !== 'overview') showToast(data[0] + ' preview — sample UI only');
  }
  document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => setView(button.dataset.view)));
  document.getElementById('mobileMenu').addEventListener('click', () => sidebar.classList.toggle('open'));
  document.getElementById('exploreButton').addEventListener('click', () => setView('services'));
  document.querySelectorAll('.row-arrow').forEach(button => button.addEventListener('click', () => showToast('Lead details preview — live lead data is not connected yet.')));
  document.getElementById('notifyButton').addEventListener('click', async () => {
    if (!('Notification' in window)) return showToast('This browser does not support push notifications.');
    if (Notification.permission === 'granted') return showToast('Browser notifications are already allowed.');
    if (Notification.permission === 'denied') return showToast('Notifications are blocked in browser settings.');
    const permission = await Notification.requestPermission();
    showToast(permission === 'granted' ? 'Permission enabled. Push delivery will be connected in a later phase.' : 'Notification permission was not enabled.');
  });
  document.addEventListener('click', event => {
    if (window.innerWidth <= 900 && sidebar.classList.contains('open') && !sidebar.contains(event.target) && !event.target.closest('#mobileMenu')) sidebar.classList.remove('open');
  });
})();