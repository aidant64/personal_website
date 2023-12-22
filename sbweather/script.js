function getTable(location, tableID) {
    const url = '/sbweather/generateTable.py?loc=' + location;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
            document.getElementById(tableID).innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

getTable('46218', 'table1');
getTable('46054', 'table2');
getTable('46053', 'table3');
getTable('NTBC1', 'table4');