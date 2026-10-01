/**
 * SarkariSewa India - Social Share Widget Helper
 * Enables Web Share API, WhatsApp, Telegram, and Link Copying.
 */
document.addEventListener('DOMContentLoaded', () => {
  const shareButtons = document.querySelectorAll('[data-share-action]');
  
  shareButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const title = document.title || 'SarkariSewa India';
      const url = window.location.href;
      const action = btn.getAttribute('data-share-action');

      if (action === 'native' && navigator.share) {
        try {
          await navigator.share({ title, url });
        } catch (err) {
          console.log('Share dismissed');
        }
      } else if (action === 'whatsapp') {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}`, '_blank');
      } else if (action === 'telegram') {
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
      } else if (action === 'copy') {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(url).then(() => {
            const orig = btn.innerText;
            btn.innerText = 'Copied! ✓';
            setTimeout(() => btn.innerText = orig, 2000);
          });
        }
      }
    });
  });
});
