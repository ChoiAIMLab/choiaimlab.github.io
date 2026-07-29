// AIM Lab Publications Tree Switching
document.addEventListener('DOMContentLoaded', () => {
  const treeBtns = document.querySelectorAll('.tree-btn');
  const pubCategories = document.querySelectorAll('.pub-category');

  // Handle Publications Tree Sub-Tab Clicks
  treeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCat = btn.getAttribute('data-target');

      // Highlight active tree node
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
