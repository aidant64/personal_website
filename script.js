
const contentDiv = document.getElementById("content");

const educationMenu = document.getElementById("Education");
const projectMenu = document.getElementById("Projects");
const researchMenu = document.getElementById("Research");
const aboutMenu = document.getElementById("About");

const messageDiv = document.getElementById("messageHtml");

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


const mButton = document.getElementById('mbutton');
const mStatus = document.getElementById('mstatus');
const mTextField = document.getElementById('mtext');

var clickCount = parseInt(getCookie('clickCount')) || 0;
mButton.addEventListener("click", mButtonClicked);

function mButtonClicked() {

  mStatus.textContent = "...sending..."

  const message = mTextField.value;
  const MAX_LENGTH = 1000;
  if(message.length > MAX_LENGTH || message.length <= 0){
    mStatus.textContent = "Message must be 1-" + MAX_LENGTH + " characters";
    return null;
  }

  clickCount = parseInt(getCookie('clickCount')) || 0;
  clickCount++;
  document.cookie = "clickCount=" + clickCount;
  if(clickCount >= 4){
    mStatus.textContent = "You can only send 3 messages.";
    return null;
  }

  const my_url = '/s.py?a=' + message;
  fetch(my_url)
    .then(response => {
      if (!response.ok) {
        mStatus.textContent = "Unknown network error";
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      mStatus.textContent = "Message delivered!";
      console.log(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}

function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length, cookie.length);
      }
  }
  return null;
}
