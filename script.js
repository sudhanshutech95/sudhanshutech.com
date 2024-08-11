function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const toggle = document.querySelector('.toggle');
    const projectButtons = document.getElementById('project-buttons');
    const body = document.body;

    navLinks.classList.toggle('active');
    toggle.classList.toggle('active');

    // Lock or unlock scrolling based on the navLinks state
    if (navLinks.classList.contains('active')) {
        body.classList.add('scroll-locked');
    } else {
        body.classList.remove('scroll-locked');
    }

    // Show project buttons if the navbar is closed
    if (!navLinks.classList.contains('active')) {
        projectButtons.style.display = 'flex';
    }
}

// Close the navbar when any link is clicked
const navLinkItems = document.querySelectorAll('.nav-links a');
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const toggle = document.querySelector('.toggle');

        // Add a small delay to prevent flickering
        setTimeout(() => {
            navLinks.classList.remove('active');
            toggle.classList.remove('active');
            document.body.classList.remove('scroll-locked');
        }, 200); // 200ms delay before closing the navbar
    });
});

window.onload = function() {
    selectButton('htmlCss');
};

function goback() {
    window.history.back();
}

function showProjects() {
    const navLinks = document.querySelector('.nav-links');
    const projectButtons = document.getElementById('project-buttons');
    projectButtons.style.display = 'flex';
}

const buttons = document.querySelectorAll('.project-buttons1 button');
const sections = {
    fullStack: document.querySelector('.full-stack'),
    react: document.querySelector('.react'),
    htmlCss: document.querySelector('.html-css'),
    javaScript: document.querySelector('.javascript')
};

function selectButton(buttonId) {
    buttons.forEach(button => {
        button.classList.remove('selected');
    });
    document.getElementById(buttonId).classList.add('selected');

    Object.keys(sections).forEach(section => {
        sections[section].style.display = 'none';
        sections[section].classList.remove('fade-up');
    });

    const selectedSection = sections[buttonId];
    selectedSection.style.display = 'block';
    setTimeout(() => {
        selectedSection.classList.add('fade-up');
    }, 10);
}

window.addEventListener('load', function() {
    const loaderWrapper = document.getElementById('loader-wrapper');
    loaderWrapper.style.display = 'none';
});
