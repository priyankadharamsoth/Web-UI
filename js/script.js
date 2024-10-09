//for content change
document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.getElementById('homeLink');
    const servicesLink = document.getElementById('servicesLink');
    const homeContent = document.getElementById('homePageContent');
    const serviceContent = document.getElementById('servicePageContent');

    // Function to show home content
    function showHomeContent() {
        homeContent.style.display = 'block';
        serviceContent.style.display = 'none';
        servicesLink.style.backgroundColor = "" ;
        servicesLink.style.borderRadius = "";
        servicesLink.style.color = "" ;
    }

    // Function to show services content
    function showServiceContent() {
        servicesLink.style.color = 'white';
        servicesLink.style.background = '#465677';
        servicesLink.style.borderRadius = '5px';
        homeContent.style.display = 'none';
        serviceContent.style.display = 'block';
    }

    homeLink.addEventListener('click', function(event) {
        showHomeContent();
    });

    servicesLink.addEventListener('click', function(event) {
        showServiceContent();
    });

    showHomeContent();
});
