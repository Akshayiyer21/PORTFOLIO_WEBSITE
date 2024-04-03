// Header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// Navbar hide
let navLinks = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navLinks.forEach(function(a) {
    a.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    });
});

// Function to change profession text dynamically with fire burning effect
function changeProfession() {
    let professionSpan = document.getElementById("profession");
    let professions = ["SOFTWARE DEVELOPER", "PROFESSIONAL FOOTBALL PLAYER"];
    let currentIndex = 0;

    // Function to animate the change
    function animateChange() {
        let oldProfession = professionSpan.textContent;
        let newProfession = professions[currentIndex];
        let fireClass = "fire-animation";

        // Add fire animation class
        professionSpan.classList.add(fireClass);

        // Wait for the fire animation to finish
        setTimeout(() => {
            professionSpan.textContent = newProfession;
            professionSpan.classList.remove(fireClass); // Remove fire animation class
        }, 1000); // Adjust this delay to match your fire animation duration

        currentIndex = (currentIndex + 1) % professions.length;
    }

    // Call the animateChange function every 3 seconds
    setInterval(animateChange, 3000); // Change interval in milliseconds
}

// Call the function when the page is loaded
window.addEventListener("load", changeProfession);

// Handle click event for downloading CV
document.getElementById("download-cv").addEventListener("click", function() {
    window.location.href = 'C:\Users\AKSHAY\Documents\cv resume pfe latest[1] .pdf';
});
