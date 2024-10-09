document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.getElementById('homeLink');
    const servicesLink = document.getElementById('servicesLink');
    const homeContent = document.getElementById('homePageContent');
    const serviceContent = document.getElementById('servicePageContent');

    // Function to show home content
    function showHomeContent() {
        homeContent.style.display = 'block';
        serviceContent.style.display = 'none';
        homeLink.classList.add('selected-tab');
        servicesLink.classList.remove('selected-tab');
    }

    // Function to show services content
    function showServiceContent() {
        homeContent.style.display = 'none';
        serviceContent.style.display = 'block';
        servicesLink.classList.add('selected-tab');
        homeLink.classList.remove('selected-tab');
    }

    homeLink.addEventListener('click', function(event) {
        showHomeContent();
    });

    servicesLink.addEventListener('click', function(event) {
        showServiceContent();
    });

    showHomeContent();
});
