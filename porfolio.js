document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    
    function toggleMenu() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
        
        // Optional: Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menu.contains(event.target) && !menuToggle.contains(event.target) && menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        });
    }

    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleMenu();
    });
});