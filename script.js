
const contentDiv = document.getElementById("content");
const subheader = document.getElementById("mh4");

const educationMenu = document.getElementById("Education");
const projectMenu = document.getElementById("Projects");
const researchMenu = document.getElementById("Research");
const aboutMenu = document.getElementById("About");

educationMenu.addEventListener("click", educationMenuPress);
projectMenu.addEventListener("click", projectMenuPress);
researchMenu.addEventListener("click", researchMenuPress);
aboutMenu.addEventListener("click", aboutMenuPress);

const messageDiv = document.getElementById("poll");
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");
const op4 = document.getElementById("op4");
op1.addEventListener("click", function () {
  handleButtonClick(1);
});

op2.addEventListener("click", function () {
  handleButtonClick(2);
});

op3.addEventListener("click", function () {
  handleButtonClick(3);
});

op4.addEventListener("click", function () {
  handleButtonClick(4);
});

function checkAnswered() {
  var x = localStorage.getItem('polled');
  if (x == null) {
    return false;
  }
  x = parseInt(x, 10);

  const my_url = '/poll/data'
  fetch(my_url, { cache: 'no-cache' })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      updateGraphWidths(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });

  op1.disabled = true;
  op2.disabled = true;
  op3.disabled = true;
  op4.disabled = true;
  updateGraphColors(x);

  return true;
}

function updateGraphWidths(data) {
  const ndata = data.split(',').map(Number);

  const viewportHeight = document.getElementById("question").offsetWidth - 50;
  const localMax = Math.max(...ndata);

  for (var i = 0; i < ndata.length; i++) {
    var h = ndata[i] / localMax * viewportHeight;
    if (h < 20) {
      h = 20;
    }

    const button = document.getElementById(`op${i + 1}`);
    button.style.width = `${h}px`;
    if (i == 0) {
      op1.textContent = `Mac OS (${ndata[i]})`
    } else if (i == 1) {
      op2.textContent = `Windows (${ndata[i]})`
    } else if (i == 2) {
      op3.textContent = `Unix/Linux (${ndata[i]})`
    } else if (i == 3) {
      op4.textContent = `Chrome OS (${ndata[i]})`
    }
  }
}

function updateGraphColors(buttonID) {
  op1.style.cursor = "default";
  op2.style.cursor = "default";
  op3.style.cursor = "default";
  op4.style.cursor = "default";


  if (buttonID == 1) {
    op1.style.backgroundColor = "PURPLE";
  } else if (buttonID == 2) {
    op2.style.backgroundColor = "PURPLE";
  } else if (buttonID == 3) {
    op3.style.backgroundColor = "PURPLE";
  } else {
    op4.style.backgroundColor = "PURPLE";
  }
}

function handleButtonClick(buttonId) {
  if (checkAnswered()) {
    return;
  }

  op1.disabled = true;
  op2.disabled = true;
  op3.disabled = true;
  op4.disabled = true;

  const my_url = '/poll/graph.py?a=' + buttonId;
  fetch(my_url, { cache: 'no-cache' })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      updateGraphWidths(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });

  localStorage.setItem('polled', buttonId);

  updateGraphColors(buttonId);

}


function educationMenuPress() {
  sessionStorage.setItem("position", 0);
  deselectAll();
  educationMenu.classList.add('selected');
  messageDiv.style.display = "none";

  fetch('/education/education.php')
    .then(response => response.text())
    .then(data => {
      contentDiv.innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading external HTML:', error);
    });
}


function projectMenuPress() {
  sessionStorage.setItem("position", 1);
  deselectAll();
  projectMenu.classList.add('selected');
  messageDiv.style.display = "none";

  fetch('/projects/projects.php')
    .then(response => response.text())
    .then(data => {
      contentDiv.innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading external HTML:', error);
    });
}

function researchMenuPress() {
  sessionStorage.setItem("position", 2);
  deselectAll();
  researchMenu.classList.add('selected');
  messageDiv.style.display = "none";

  fetch('/research/research.php')
    .then(response => response.text())
    .then(data => {
      contentDiv.innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading external HTML:', error);
    });
}

function aboutMenuPress() {
  sessionStorage.setItem("position", 3);
  deselectAll();
  aboutMenu.classList.add('selected');
  messageDiv.style.display = "block";

  contentDiv.innerHTML = "";
  checkAnswered()
}


function deselectAll() {
  educationMenu.classList.remove('selected');
  projectMenu.classList.remove('selected');
  researchMenu.classList.remove('selected');
  aboutMenu.classList.remove('selected');
}

function findPosition() {
  const position = sessionStorage.getItem("position");

  if (position == null || position == 0) {
    educationMenuPress();
  } else if (position == 1) {
    projectMenuPress();
  } else if (position == 2) {
    researchMenuPress();
  } else if (position == 3) {
    aboutMenuPress();
  }
}

const waveappMenu = document.getElementById("waveapp");
waveappMenu.addEventListener("click", function () {
  window.location.href = "/map";
});


messageDiv.style.display = "none";
findPosition();
document.body.style.display = "block";
