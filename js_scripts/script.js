
const contentDiv = document.getElementById("content");

const educationMenu = document.getElementById("Education");
const projectMenu = document.getElementById("Projects");
const researchMenu = document.getElementById("Research");
const aboutMenu = document.getElementById("About");


educationMenu.addEventListener("click", educationMenuPress);
projectMenu.addEventListener("click", projectMenuPress);
researchMenu.addEventListener("click", researchMenuPress);
aboutMenu.addEventListener("click", aboutMenuPress);

messageDiv.style.display = "none";
educationMenuPress();

function educationMenuPress() {
  deselectAll();
  educationMenu.classList.add('selected');
  messageDiv.style.display = "none";

  fetch('/education/education.html')
    .then(response => response.text())
    .then(data => {
      contentDiv.innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading external HTML:', error);
    });
}

function projectMenuPress() {
  deselectAll();
  projectMenu.classList.add('selected');
  messageDiv.style.display = "none";

  fetch('/projects/projects.html')
    .then(response => response.text())
    .then(data => {
      contentDiv.innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading external HTML:', error);
    });
}

function researchMenuPress() {
  deselectAll();
  researchMenu.classList.add('selected');
  messageDiv.style.display = "none";

  fetch('/research/research.html')
    .then(response => response.text())
    .then(data => {
      contentDiv.innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading external HTML:', error);
    });
}

function aboutMenuPress() {
  deselectAll();
  aboutMenu.classList.add('selected');
  messageDiv.style.display = "block";

  contentDiv.innerHTML = "";
}


function deselectAll() {
  educationMenu.classList.remove('selected');
  projectMenu.classList.remove('selected');
  researchMenu.classList.remove('selected');
  aboutMenu.classList.remove('selected');
}



