document.addEventListener('DOMContentLoaded', (event) => {
    const typedText = document.querySelector('.typedText');
    const texts = ["a Web Developer", "a Software Engineer", "a Learner"];
    let currentIndex = 0;
    let currentText = '';
    let letterIndex = 0;
  
    (function type() {
        if (currentIndex === texts.length) {
            currentIndex = 0;
        }
        currentText = texts[currentIndex];
        letterIndex++;
        typedText.textContent = currentText.slice(0, letterIndex);
  
        if (letterIndex === currentText.length) {
            currentIndex++;
            letterIndex = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 200);
        }
    }());
  
    // Navigation Menu Toggle
    const navMenu = document.getElementById('myNavMenu');
    document.querySelector('.nav-menu-btn i').addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
  
    // Sticky Navbar
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
  });
  