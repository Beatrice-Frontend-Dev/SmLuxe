//Toggle nav menu

function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  // Toggle the 'active' class to show/hide the navigation links
  navLinks.classList.toggle("active");
}

//IMAGE SLIDER

let currentIndex = 0;

function showSlide(index) {
  const carousel = document.getElementById("carousel");
  const slidesToShow = 5;
  const totalSlides = carousel.children.length;

  // Keep the index within bounds to avoid white space
  if (index > totalSlides - slidesToShow) {
    currentIndex = 0; // Reset to the first slide if out of bounds
  } else if (index < 0) {
    currentIndex = totalSlides - slidesToShow; // Go to last valid position
  } else {
    currentIndex = index;
  }

  // Calculate offset to move the carousel
  const offset = -currentIndex * 20; // Each image is 19% of the container
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

/* last part */

const message = "Developed by Dev. Beatrice!!";
let i = 0;

function typeWriter() {
  if (i < message.length) {
    document.getElementById("dev").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 100); // Adjust typing speed here
  } else {
    // Clear only the message, keep the dot
    setTimeout(() => {
      document.getElementById("dev").innerHTML = "";
      i = 0;
      typeWriter(); // Restart typing effect
    }, 2000); // Adjust pause duration before repeating
  }
}

// Initialize the carousel to start at the first slide
document.addEventListener("DOMContentLoaded", () => {
  showSlide(0);
  typeWriter();
});
