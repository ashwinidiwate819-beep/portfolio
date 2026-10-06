// =====================================================
// MOBILE NAVIGATION
// =====================================================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


// Open / close mobile menu

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close menu after clicking a navigation link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// =====================================================
// CONTACT FORM
// =====================================================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();


    // Get user's name
    const name = document.getElementById("name").value;


    // Display success message
    formMessage.textContent =
        `Thank you, ${name}! Your message has been received.`;


    // Clear form
    contactForm.reset();

});


// =====================================================
// CURRENT YEAR
// =====================================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

