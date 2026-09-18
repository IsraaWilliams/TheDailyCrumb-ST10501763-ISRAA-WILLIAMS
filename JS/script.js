// The Daily Crumb
document.addEventListener("DOMContentLoaded", () => {
  // Form validation
  const form = document.getElementById("enquiryForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      if (name === "" || email === "") {
        alert("Please fill in all required fields.");
        return;
      }
      alert("Thank you " + name + "! Your enquiry has been received. We will contact you within 24 hours.");
      form.reset();
    });
  }
  // Simple active link highlight
  console.log("The Daily Crumb loaded - ST10501763");
});