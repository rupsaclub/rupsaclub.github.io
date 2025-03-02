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

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Close menu when clicking a nav link on mobile
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
            }
        });
    });
});