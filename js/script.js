document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }

        link.addEventListener('click', () => {
            clearActive();
            link.classList.add('active');
        });
    });

    function clearActive() {
        navLinks.forEach(link => link.classList.remove('active'));
    }
});
