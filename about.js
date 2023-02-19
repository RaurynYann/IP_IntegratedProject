function animateOnScroll(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }
  
  const observer = new IntersectionObserver(animateOnScroll, { threshold: 0.2 });
  
  const animatedElements = document.querySelectorAll("[data-scroll]");
  
  animatedElements.forEach(el => observer.observe(el));
  