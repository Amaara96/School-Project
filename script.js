document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        section.style.backgroundColor = "#e0f7fa"; // Light blue background
      } else {
        section.style.backgroundColor = ""; // Reset background
      }
    });
  });