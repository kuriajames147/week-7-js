// script.js - JavaScript wizardry 🧙‍♂️

// 1. Event Handling
const clickBtn = document.getElementById('clickMe'); // Get the button element by ID
clickBtn.addEventListener('click', () => { // Add click event listener
  alert('You clicked the button! 🎉'); // Show alert when button is clicked
});

const hoverPara = document.getElementById('hoverMe'); // Get the paragraph to hover over
hoverPara.addEventListener('mouseover', () => { // Add mouseover event
  hoverPara.style.color = 'blue'; // Change text color to blue on hover
});
hoverPara.addEventListener('mouseout', () => { // Add mouseout event
  hoverPara.style.color = ''; // Reset text color when not hovering
});
const keyInput = document.getElementById('keyInput'); // Get input field for keypress detection
keyInput.addEventListener('keypress', (e) => { // Add keypress event listener
  console.log(`You pressed: ${e.key}`); // Log the key that was pressed
});

const secretAction = document.getElementById('secretAction'); // Get the secret element
secretAction.addEventListener('dblclick', () => { // Add double-click event listener
  alert('🎊 Surprise! Double-click detected!'); // Alert when double-clicked
});
// 2. Interactive Elements
const colorChanger = document.getElementById('colorChanger'); // Get the color-changing button
colorChanger.addEventListener('click', () => { // Add click event listener
  colorChanger.style.backgroundColor = '#28a745'; // Change background color to green
  colorChanger.textContent = "I'm green now! 💚"; // Change text content
});
const images = [ // Array of image URLs for slideshow
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg'
];
let imgIndex = 0; // Start index for images
const galleryImg = document.getElementById('galleryImg'); // Get image element
const nextImg = document.getElementById('nextImg'); // Get next image button

nextImg.addEventListener('click', () => { // Add click event for slideshow
  imgIndex = (imgIndex + 1) % images.length; // Update index cyclically
  galleryImg.src = images[imgIndex]; // Set image source to new image
});

const tabButtons = document.querySelectorAll('.tab'); // Get all tab buttons
const tabContent = document.getElementById('tabContent'); // Get tab content element
const tabData = { // Data for each tab
  '1': 'Welcome to Tab 1! 🌟',
  '2': 'This is content from Tab 2! 🎯'
};
tabButtons.forEach(btn => { // Loop through all tab buttons
  btn.addEventListener('click', () => { // Add click event to each
    const tabId = btn.dataset.tab; // Get tab ID from data attribute
    tabContent.textContent = tabData[tabId]; // Show corresponding content
  });
});
// 3. Form Validation
const signupForm = document.getElementById('signupForm'); // Get signup form element
const feedback = document.getElementById('formFeedback'); // Get feedback display element

signupForm.addEventListener('submit', (e) => { // Add form submit event
  e.preventDefault(); // Prevent form from submitting normally
  const name = document.getElementById('name').value.trim(); // Get name value and trim whitespace
  const email = document.getElementById('email').value.trim(); // Get email value and trim whitespace
  const password = document.getElementById('password').value; // Get password value

  if (!name || !email || !password) { // Check if any field is empty
    feedback.textContent = 'Please fill in all fields.'; // Show error message
    feedback.style.color = 'red'; // Set error text color
    return; // Exit function
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for validating email
  if (!emailRegex.test(email)) { // Test if email matches regex
    feedback.textContent = 'Invalid email format.'; // Show error
    feedback.style.color = 'red'; // Set error color
    return; // Exit function
  }

  if (password.length < 8) { // Check password length
    feedback.textContent = 'Password must be at least 8 characters long.'; // Show error message
    feedback.style.color = 'red'; // Set error color
    return; // Exit function
  }

  feedback.textContent = 'Form submitted successfully! ✅'; // Show success message
  feedback.style.color = 'green'; // Set success message color
});
