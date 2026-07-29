// AIM Lab Interactivity & Publications Filter
document.addEventListener('DOMContentLoaded', () => {
  const pubTabBtns = document.querySelectorAll('.pub-tab-btn');
  const pubCategories = document.querySelectorAll('.pub-category');
  const dropdownItems = document.querySelectorAll('.dropdown-item');

  // Filter function for Publications
  function filterPublications(filterTarget) {
    // Update sub-tab button active states
    pubTabBtns.forEach(btn => {
      if (btn.getAttribute('data-target') === filterTarget) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Show/hide categories
    pubCategories.forEach(cat => {
      if (filterTarget === 'all') {
        cat.style.display = 'block';
      } else {
        const catId = cat.getAttribute('id');
        if (catId === `cat-${filterTarget}`) {
          cat.style.display = 'block';
        } else {
          cat.style.display = 'none';
        }
      }
    });
  }

  // Handle Sub-tab Button Clicks
  pubTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      filterPublications(target);
    });
  });

  // Handle Dropdown Menu Clicks
  dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const filter = item.getAttribute('data-filter');
      filterPublications(filter);
      
      // Smooth scroll to publications section
      const pubSection = document.getElementById('publications');
      if (pubSection) {
        pubSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
