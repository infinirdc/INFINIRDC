document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add a class to header on scroll for subtle styling change (optional)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // After scrolling 50px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Simple animation for bars in impact section
    const wealthBar = document.querySelector('.bar.wealth');
    const impactBar = document.querySelector('.bar.impact');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the element is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate bars when in view
                wealthBar.style.height = '80%'; // Actual height for wealth
                impactBar.style.height = '90%'; // Actual height for impact
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, observerOptions);

    // Start observing the bar chart container
    const barChartContainer = document.querySelector('.bar-chart');
    if (barChartContainer) {
        observer.observe(barChartContainer);
    }
});