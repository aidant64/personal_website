const mButton = document.getElementById('mbutton');
const mStatus = document.getElementById('mstatus');
mButton.addEventListener("click", mButtonClicked);


function mButtonClicked() {
    var x = contactServer();
}

function contactServer() {
    mStatus.textContent = "sent";


    const url = '/script.py';
    const data = { key1: 'value1', key2: 'value2' };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add any other headers your API requires here
        },
        body: JSON.stringify(data), // Convert data to JSON string
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse response body as JSON
        })
        .then(data => {
            console.log('PUT request succeeded with JSON response:', data);
        })
        .catch(error => {
            console.error('PUT request failed:', error);
        });


    mStatus.textContent = "recieved";
}

