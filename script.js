// Initially select the first button and show the corresponding section
window.onload = function() {
    selectButton('htmlCss');
};

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const toggle = document.querySelector('.toggle');
    const projectButtons = document.getElementById('project-buttons');
    const body = document.body; // Add this line

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
    });

    sections[buttonId].style.display = 'block';
}




