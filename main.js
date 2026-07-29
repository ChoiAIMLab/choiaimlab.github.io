// Single Page Tab Navigation & Publications Tree Switching
document.addEventListener('DOMContentLoaded', () => {
  const navTabs = document.querySelectorAll('.nav-tab');
  const pageSections = document.querySelectorAll('.page-section');
  const treeBtns = document.querySelectorAll('.tree-btn');
  const pubCategories = document.querySelectorAll('.pub-category');

  // 1. Main Navigation Tab Switch (Exclusively show clicked section)
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetSection = tab.getAttribute('data-section');

      // Update active nav tab
      navTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Show targeted section only
      pageSections.forEach(sec => {
        const secId = sec.getAttribute('id');
        if (secId === `sec-${targetSection}`) {
          sec.classList.add('active');
        } else {
          sec.classList.remove('active');
        }
      });

      // Scroll smoothly to top of main content
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // 2. Publications Tree Sub-Tab Switch
  treeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCat = btn.getAttribute('data-target');

      // Highlight active tree node
      treeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show selected category
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
