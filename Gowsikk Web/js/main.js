// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const services = document.querySelectorAll('.service');

  services.forEach(service => {
    service.addEventListener('mousemove', e => {
      // Get the position of the service item container
      const rect = service.getBoundingClientRect();
      // Calculate the position of the mouse pointer relative to the service item container
      const x = e.clientX - rect.left; // Horizontal position
      const y = e.clientY - rect.top; // Vertical position
      // Calculate the rotation angles based on the mouse pointer position
      const rotationX = (y / rect.height - 0.5) * 50; // Adjust the factor to control the rotation
      const rotationY = -(x / rect.width - 0.5) * 50; // Adjust the factor to control the rotation
      // Apply 3D transformation to create the depth effect
      service.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) translateZ(30px)`;
    });
    // Reset transformation on mouseout
    service.addEventListener('mouseout', () => {
      service.style.transform = 'none'; // Revert to original state
    });
  });
});

const portfolios = document.querySelectorAll('.portfolio');

  // Add mousemove event listener to each portfolio item container
  portfolios.forEach(portfolio => {
    portfolio.addEventListener('mousemove', e => {
      // Get the position of the portfolio item container
      const rect = portfolio.getBoundingClientRect();
      // Calculate the position of the mouse pointer relative to the portfolio item container
      const x = e.clientX - rect.left; // Horizontal position
      const y = e.clientY - rect.top; // Vertical position
      // Calculate the rotation angles based on the mouse pointer position
      const rotationX = (y / rect.height - 0.5) * 60; // Adjust the factor to control the rotation
      const rotationY = -(x / rect.width - 0.5) * 60; // Adjust the factor to control the rotation
      // Apply 3D transformation to create the depth effect
      portfolio.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) translateZ(30px)`;
    });
    // Reset transformation on mouseout
    portfolio.addEventListener('mouseout', () => {
      portfolio.style.transform = 'none'; // Revert to original state
    });
  });

