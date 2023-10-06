
const contentDiv = document.getElementById("content");

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
  fetch(my_url)
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
    op1.style.backgroundColor = "RED";
  } else if (buttonID == 2) {
    op2.style.backgroundColor = "RED";
  } else if (buttonID == 3) {
    op3.style.backgroundColor = "RED";
  } else {
    op4.style.backgroundColor = "RED";
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
  fetch(my_url)
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
  checkAnswered()
}


function deselectAll() {
  educationMenu.classList.remove('selected');
  projectMenu.classList.remove('selected');
  researchMenu.classList.remove('selected');
  aboutMenu.classList.remove('selected');
}


messageDiv.style.display = "none";
educationMenuPress();

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
  document.body.classList.add("mobile");
} else {
  document.body.classList.add("desktop");
}
