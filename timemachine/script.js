function getRequest() {
    fetch('/timemachine/goback.bash')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Retrieve the response as text
        })
        .then(data => {
            // Work with the text data from the response
            console.log(data);
        })
        .catch(error => {
            // Handle errors during the request
            console.error('There was a problem with the fetch operation:', error);
        });
}