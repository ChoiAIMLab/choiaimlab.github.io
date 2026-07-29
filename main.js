// AIM Lab Interactive Logic (Publications, People & Research Category Switching + Expandable Galleries & Lightbox Modal)
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

  // 3. Past Projects Expandable Figure Galleries (Toggle figures on same page)
  const projectToggles = document.querySelectorAll('.project-header-toggle');

  projectToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      const targetGalleryId = toggle.getAttribute('data-toggle');
      const gallery = document.getElementById(targetGalleryId);
      const parentCard = toggle.closest('.expandable-card');

      if (gallery) {
        gallery.classList.toggle('active');
        if (parentCard) {
          parentCard.classList.toggle('active');
        }
      }
    });
  });

  // 4. Image Lightbox Modal View (In-page enlarged overlay view)
  const galleryImgs = document.querySelectorAll('.gallery-img');
  const imageModal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  const modalClose = document.querySelector('.modal-close');

  if (imageModal && modalImg) {
    galleryImgs.forEach(img => {
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        const imgSrc = img.getAttribute('src');
        const imgAlt = img.getAttribute('alt') || 'Project Figure';
        const parentItem = img.closest('.gallery-item');
        const captionText = parentItem ? parentItem.querySelector('.img-caption')?.innerText : imgAlt;

        modalImg.src = imgSrc;
        if (modalCaption) {
          modalCaption.innerText = captionText;
        }
        imageModal.classList.add('active');
      });
    });

    // Close when clicking Close button
    if (modalClose) {
      modalClose.addEventListener('click', () => {
        imageModal.classList.remove('active');
      });
    }

    // Close when clicking anywhere outside of the image (overlay background)
    imageModal.addEventListener('click', (e) => {
      if (e.target !== modalImg) {
        imageModal.classList.remove('active');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && imageModal.classList.contains('active')) {
        imageModal.classList.remove('active');
      }
    });
  }

  // 5. People Sub-Menu Smooth Anchor Scrolling & Active Highlighting on Scroll
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
