// Button alert on hero section
function showAlert() {
  alert("Thank you for choosing Sweet Crumbs! 🧁");
}

// Simple contact form submission handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thank you, ${name}! Your message has been sent successfully.`);
  this.reset();
});
