
const contentDiv = document.getElementById("content");

const educationMenu = document.getElementById("Education");
const projectMenu = document.getElementById("Projects");
const researchMenu = document.getElementById("Research");
const aboutMenu = document.getElementById("About");

educationMenu.addEventListener("click", educationMenuPress);
projectMenu.addEventListener("click", projectMenuPress);
researchMenu.addEventListener("click", researchMenuPress);
aboutMenu.addEventListener("click", aboutMenuPress);

function onload() {
    educationMenuPress();
}

function educationMenuPress() {
    deselectAll();
    educationMenu.classList.add('selected');

    // Use the fetch() function to retrieve the external HTML file
    fetch('/education/education.html')
        .then(response => response.text())
        .then(data => {
            // Insert the loaded HTML content into the externalContent div
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading external HTML:', error);
        });
}


function projectMenuPress() {
    deselectAll();
    projectMenu.classList.add('selected');

    // Use the fetch() function to retrieve the external HTML file
    fetch('/projects/projects.html')
        .then(response => response.text())
        .then(data => {
            // Insert the loaded HTML content into the externalContent div
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading external HTML:', error);
        });
}

function researchMenuPress() {
    deselectAll();
    researchMenu.classList.add('selected');

    // Use the fetch() function to retrieve the external HTML file
    fetch('/research/research.html')
        .then(response => response.text())
        .then(data => {
            // Insert the loaded HTML content into the externalContent div
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading external HTML:', error);
        });
}

function aboutMenuPress() {
    deselectAll();
    aboutMenu.classList.add('selected');

    // Use the fetch() function to retrieve the external HTML file
    fetch('/about/about.html')
        .then(response => response.text())
        .then(data => {
            // Insert the loaded HTML content into the externalContent div
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading external HTML:', error);
        });
}


function deselectAll() {
    educationMenu.classList.remove('selected');
    projectMenu.classList.remove('selected');
    researchMenu.classList.remove('selected');
    aboutMenu.classList.remove('selected');
}
