// Form Validation (contact.html)
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById('email').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // If email is valid, you can proceed with form submission
  alert('Thank you for your message!');
  form.reset();
});

// Dropdown Menu Functionality
const dropdownBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', function(event) {
  event.preventDefault();
  dropdownContent.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const supportedLanguages = ["English", "Spanish", "French", "German", "Japanese"];
console.log(supportedLanguages); 
