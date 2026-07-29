// AIM Lab Navigation & Publications Tree Switching
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-tab');
  const sections = document.querySelectorAll('.section');
  const treeBtns = document.querySelectorAll('.tree-btn');
  const pubCategories = document.querySelectorAll('.pub-category');

  // 1. Navigation Tab Clicking (Smooth Scroll into Section)
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Scroll smoothly to section
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Highlight Active Tab on Scroll
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= (sectionTop - 160)) {
        current = section.getAttribute('id');
      }
    });

    if (current) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // 2. Publications Tree Sub-Tab Switch
  treeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCat = btn.getAttribute('data-target');

      // Highlight active tree button
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
