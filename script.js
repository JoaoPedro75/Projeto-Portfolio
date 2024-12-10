AOS.init({
    duration: 1000,
    once: true,
  });


  const progressBars = document.querySelectorAll(".progress-bar");
  window.addEventListener("scroll", () => {
    progressBars.forEach((bar) => {
      const barPosition = bar.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;
      if (barPosition < screenPosition) {
        bar.style.width = bar.getAttribute("data-value") + "%";
      }
    });
  });
