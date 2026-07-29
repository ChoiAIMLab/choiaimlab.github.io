// AIM Lab Categories Switching (Publications & People)
document.addEventListener('DOMContentLoaded', () => {
  const treeBtns = document.querySelectorAll('.tree-btn');
  const pubCategories = document.querySelectorAll('.pub-category');
  const peopleCategories = document.querySelectorAll('.people-category');

  // Handle Categories Sub-Tab Clicks
  treeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCat = btn.getAttribute('data-target');

      // Highlight active category button
      treeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Toggle Publications category visibility
      pubCategories.forEach(cat => {
        const catId = cat.getAttribute('id');
        if (catId === `cat-${targetCat}`) {
          cat.classList.add('active');
        } else {
          cat.classList.remove('active');
        }
      });

      // Toggle People category visibility
      peopleCategories.forEach(cat => {
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
