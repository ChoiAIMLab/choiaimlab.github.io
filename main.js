// AIM Lab Interactivity & Publications Tree Tabs
document.addEventListener('DOMContentLoaded', () => {
  const treeBtns = document.querySelectorAll('.pub-tree-btn');
  const pubCategories = document.querySelectorAll('.pub-category');

  // Handle Publications Tree Sub-Tab Clicks
  treeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');

      // Active button highlight
      treeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Toggle category visibility
      pubCategories.forEach(cat => {
        const catId = cat.getAttribute('id');
        if (catId === `cat-${target}`) {
          cat.classList.add('active');
        } else {
          cat.classList.remove('active');
        }
      });
    });
  });
});
