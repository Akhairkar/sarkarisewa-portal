/**
 * SarkariSewa India - Service Page Template Helper
 * Ensures smooth interactions, accordion initialization and i18n triggers.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Ensure all FAQ accordions have smooth toggle behaviour
  const accordions = document.querySelectorAll('details.faq-item');
  accordions.forEach(acc => {
    acc.addEventListener('toggle', () => {
      if (acc.open) {
        // Optional: close other open items if single-open requested
      }
    });
  });
});
