// Smooth Scrolling & Publications Sub-Tab Switching
document.addEventListener('DOMContentLoaded', () => {
  const treeBtns = document.querySelectorAll('.pub-tree-btn');
  const pubCategories = document.querySelectorAll('.pub-category');
  const navLinks = document.querySelectorAll('.nav-tab');

  // 1. Smooth Scrolling for Navigation Tabs
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Highlight active tab
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Smooth scroll to section
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 2. Publications Sub-Tab Category Switching
  treeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCat = btn.getAttribute('data-target');

      // Update button active state
      treeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Toggle category visibility
      pubCategories.forEach(cat => {
        const catId = cat.getAttribute('id');
        if (catId === `cat-${targetCat}`) {
          cat.classList.add('active');
        } else {
          cat.classList.remove('active');
        }
      });
    });
  });
});
