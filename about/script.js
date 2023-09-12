const mButton = document.getElementById('mbutton');
const mStatus = document.getElementById('mstatus');
const mTextField = document.getElementById('mtext');
mButton.addEventListener("click", mButtonClicked);


function mButtonClicked() {
var my_url = 'http://localhost/s.py?a=' + mTextField.value;
fetch(my_url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); // Parse the response body as JSON
  })
  .then(data => {
    // Use the data received from the API
    alert(data);
    console.log(data);
  })
  .catch(error => {
    // Handle errors here
    console.error('Fetch error:', error);
  });
}
