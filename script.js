const texts = ["Web Developer", "Front End Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const typingElement = document.getElementById("typing");

function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  typingElement.textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(erase, 1500); // pause before erasing
  } else {
    setTimeout(type, 100);
  }
}

function erase() {
  letter = currentText.slice(0, --index);
  typingElement.textContent = letter;

  if (letter.length === 0) {
    count++;
    setTimeout(type, 200);
  } else {
    setTimeout(erase, 50);
  }
}

// Start typing effect
type();

// Toggle mobile menu
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});
