const mButton = document.getElementById('mbutton');
const mStatus = document.getElementById('mstatus');
const mTextField = document.getElementById('mtext');
mButton.addEventListener("click", mButtonClicked);


function mButtonClicked() {

  mStatus.textContent = "...sending..."

  const message = mTextField.value;
  const MAX_LENGTH = 1000;
  if(message.length > MAX_LENGTH){
    mStatus.textContent = "Message can only be " + structuredClone(MAX_LENGTH) + " characters";
    return null;
  }


  const my_url = 'http://localhost/s.py?a=' + message;
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
      alert(data);
      console.log(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}
