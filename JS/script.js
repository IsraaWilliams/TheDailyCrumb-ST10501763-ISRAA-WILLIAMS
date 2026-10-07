// The Daily Crumb - ST10501763 - Full functionality for Part 3
document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if(navToggle && navMenu){
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // 2. Active Link Functionality - highlights current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    if(link.getAttribute('href') === currentPage){
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 3. Menu Filtering Feature for products.html
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('#product-grid .card');
  if(filterBtns.length > 0){
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        productCards.forEach(card => {
          if(filter === 'all' || card.getAttribute('data-category') === filter){
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 4. Extended Enquiry Form Validation - inline messages, no alerts
  const form = document.getElementById("enquiryForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;
      
      // Clear previous errors
      document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const product = document.getElementById("product").value;
      const quantity = document.getElementById("quantity").value.trim();
      const dateValue = document.getElementById("date").value;

      // Name validation
      if(name === ""){
        document.getElementById("name-error").textContent = "Full name is required";
        isValid = false;
      }

      // Email format validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailPattern.test(email)){
        document.getElementById("email-error").textContent = "Please enter a valid email format";
        isValid = false;
      }

      // Product selection validation
      if(product === ""){
        document.getElementById("product-error").textContent = "Please select a product";
        isValid = false;
      }

      // Quantity validation
      if(quantity === "" || isNaN(quantity) || Number(quantity) < 1){
        document.getElementById("quantity-error").textContent = "Please enter a valid quantity (min 1)";
        isValid = false;
      }

      // Date not in past validation
      if(dateValue === ""){
        document.getElementById("date-error").textContent = "Please select a date";
        isValid = false;
      } else {
        const selectedDate = new Date(dateValue);
        const today = new Date(); today.setHours(0,0,0,0);
        if(selectedDate < today){
          document.getElementById("date-error").textContent = "Date cannot be in the past";
          isValid = false;
        }
      }

      if(isValid){
        document.getElementById("form-success").textContent = "Thank you " + name + "! Your enquiry has been received. We will contact you within 24 hours.";
        form.reset();
      }
    });
  }
  console.log("The Daily Crumb loaded - ST10501763");
});
