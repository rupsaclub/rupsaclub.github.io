// app.js
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            let element = document.getElementById(elementId);
            element.innerHTML = data;

            let scripts = element.querySelectorAll("script");
            scripts.forEach(oldScript => {
                let newScript = document.createElement("script");
                newScript.textContent = oldScript.textContent;
                document.body.appendChild(newScript).parentNode.removeChild(newScript);
            });
        })
        .catch(error => console.error("Error loading the file:", error));
}

// Load initial content
loadHTML('./html/main.html', 'main');

// Enhanced toggleDropdown function
function toggleDropdown(event) {
    // Only prevent default for mobile
    if (window.innerWidth <= 768) {
        event.preventDefault();
        event.stopPropagation();
    }

    const dropdown = event.target.nextElementSibling;
    const isActive = dropdown.classList.contains('active');

    // Close all other dropdowns
    document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== dropdown) d.classList.remove('active');
    });

    // Toggle current dropdown
    dropdown.classList.toggle('active');
    event.target.setAttribute('aria-expanded', !isActive);
}

// Hamburger and dropdown initialization
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const teamLink = document.querySelector('.team-link');

    // Hamburger menu toggle
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', nav.classList.contains('active'));
        });
    }

    // Enhanced click handling for all nav links
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            // For mobile, close menu when clicking regular links
            if (window.innerWidth <= 768 && !this.classList.contains('team-link')) {
                nav.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Close dropdowns when clicking outside (works for both desktop and mobile)
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.team-item') && !e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Handle hover for desktop
    if (window.innerWidth > 768) {
        document.querySelectorAll('.team-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.querySelector('.dropdown').classList.add('active');
            });
            item.addEventListener('mouseleave', () => {
                item.querySelector('.dropdown').classList.remove('active');
            });
        });
    }
});