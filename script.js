// Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Header background on scroll
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
      } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
      }
    });

    // Form submission
    document.querySelector('form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We\'ll get back to you soon.');
      this.reset();
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    });