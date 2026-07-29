// AIM Lab Interactive Logic (Publications, People & Research Category Switching)
document.addEventListener('DOMContentLoaded', () => {

  // 1. Publications Category Switcher
  const pubTreeBtns = document.querySelectorAll('.pub-category-btn');
  const pubCategories = document.querySelectorAll('.pub-category');

  pubTreeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCat = btn.getAttribute('data-target');
      pubTreeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      pubCategories.forEach(cat => {
        if (cat.getAttribute('id') === `cat-${targetCat}`) {
          cat.classList.add('active');
        } else {
          cat.classList.remove('active');
        }
      });
    });
  });

  // 2. Research Category Switcher (Current Research Projects vs Past Projects)
  const researchTreeBtns = document.querySelectorAll('.research-category-btn');
  const researchCategories = document.querySelectorAll('.research-category');

  researchTreeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCat = btn.getAttribute('data-target');
      researchTreeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      researchCategories.forEach(cat => {
        if (cat.getAttribute('id') === `cat-${targetCat}`) {
          cat.classList.add('active');
        } else {
          cat.classList.remove('active');
        }
      });
    });
  });

  // 3. People Sub-Menu Smooth Anchor Scrolling & Active Highlighting on Scroll
  const peopleSubBtns = document.querySelectorAll('.tree-branches a[href^="#"]');
  const peopleSections = document.querySelectorAll('.people-section');

  peopleSubBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = btn.getAttribute('href').substring(1);
      const targetSec = document.getElementById(targetId);

      if (targetSec) {
        e.preventDefault();
        peopleSubBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        targetSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Highlight active People sub-button on scroll
  if (peopleSections.length > 0) {
    window.addEventListener('scroll', () => {
      let currentSec = '';
      peopleSections.forEach(sec => {
        const secTop = sec.offsetTop;
        if (window.pageYOffset >= (secTop - 180)) {
          currentSec = sec.getAttribute('id');
        }
      });

      if (currentSec) {
        peopleSubBtns.forEach(btn => {
          btn.classList.remove('active');
          if (btn.getAttribute('href') === `#${currentSec}`) {
            btn.classList.add('active');
          }
        });
      }
    });
  }

});
