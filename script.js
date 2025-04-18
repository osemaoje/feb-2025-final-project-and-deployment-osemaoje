// Simple image slider
const images = ['images/slider1.jpg', 'images/slider2.jpg', 'images/slider3.jpg'];
let current = 0;
const sliderImage = document.getElementById('sliderImage');

setInterval(() => {
  current = (current + 1) % images.length;
  sliderImage.src = images[current];
}, 3000);

// Newsletter form validation
document.getElementById('subscribeForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const message = document.getElementById('formMessage');
  
  if (email && email.includes('@')) {
    message.textContent = "Thank you for subscribing!";
    message.style.color = "lightgreen";
  } else {
    message.textContent = "Please enter a valid email.";
    message.style.color = "red";
  }
});
