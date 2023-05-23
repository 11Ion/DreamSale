const animItems = document.querySelectorAll('.anim__item');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnscroll);

    function animOnscroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if (window.pageYOffset > animItemOffset - animItemPoint && window.pageYOffset < animItemOffset + animItemHeight) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('no_repeat')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    setTimeout(() => {
        animOnscroll();
    }, 300);
}
function initializeCarousel() {
    const carouselTitles = document.querySelectorAll('.carusell__title');
    const carouselTexts = document.querySelectorAll('.carusell__text');
    const leftButton = document.querySelector('.left svg');
    const rightButton = document.querySelector('.right svg');
    const ellipses = document.querySelectorAll('.carusell__ellipses div');
  
    let currentIndex = 0;
  
    function hideAllElements() {
      carouselTitles.forEach((title) => {
        title.classList.remove('open');
      });
  
      carouselTexts.forEach((text) => {
        text.classList.remove('open');
      });
    }
  
    function showCurrentElement() {
      carouselTitles[currentIndex].classList.add('open');
      carouselTexts[currentIndex].classList.add('open');
    }
  
    function updateEllipses() {
      ellipses.forEach((ellipse, index) => {
        if (index === currentIndex) {
          ellipse.classList.add('open');
        } else {
          ellipse.classList.remove('open');
        }
      });
    }
      function handleButtonClick(direction) {
      hideAllElements();
  
      if (direction === 'left') {
        currentIndex = (currentIndex - 1 + carouselTitles.length) % carouselTitles.length;
      } else if (direction === 'right') {
        currentIndex = (currentIndex + 1) % carouselTitles.length;
      }
  
      showCurrentElement();
      updateEllipses();
    }
  
    leftButton.addEventListener('click', () => {
      handleButtonClick('left');
    });
  
    rightButton.addEventListener('click', () => {
      handleButtonClick('right');
    });
  
    ellipses.forEach((ellipse, index) => {
      ellipse.addEventListener('click', () => {
        hideAllElements();
        currentIndex = index;
        showCurrentElement();
        updateEllipses();
      });
    });
  
    showCurrentElement();
    updateEllipses();
  }
  
  initializeCarousel();
  
  function toggleBurgerMenu() {
    var burgerActive = document.querySelector('.burger_active');
    burgerActive.classList.toggle('open_burger');
  }
  
  var openBurgerBtn = document.getElementById('open_b');
  openBurgerBtn.addEventListener('click', toggleBurgerMenu);
  
  var closeBurgerBtn = document.getElementById('close_b');
  closeBurgerBtn.addEventListener('click', toggleBurgerMenu);
  