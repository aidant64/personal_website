let map;
const container = document.getElementById('dialog');
const titleH = document.getElementById('title');
const paragraph = document.getElementById('content');

async function initMap() {

    const position = { lat: 33.784, lng: -118.284 };

    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: position,
        zoom: 8,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
        keyboardShortcuts: false,
        disableDefaultUI: true,
        mapTypeId: "terrain",
        maxZoom: 16,
        minZoom: 4,
        styles: [
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "all",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{ visibility: "off" }]
            }
        ]
    });

    const locations = [
        {
            position: { lat: 34.452, lng: -120.78 },
            title: "46218",
        },
        {
            position: { lat: 34.274, lng: -120.468 },
            title: "46054",
        },
        {
            position: { lat: 34.241, lng: -119.839 },
            title: "46053",
        },
        {
            position: { lat: 34.405, lng: -119.692 },
            title: "NTBC1",
        },
        {
            position: { lat: 33.677, lng: -120.213 },
            title: "46069",
        },
        {
            position: { lat: 33.219, lng: -119.872 },
            title: "46219",
        },
        {
            position: { lat: 33.769, lng: -119.565 },
            title: "46251",
        },
        {
            position: { lat: 33.755, lng: -119.045 },
            title: "46025",
        },
        {
            position: { lat: 35.770, lng: -121.903 },
            title: "46028",
        },
        {
            position: { lat: 34.767, lng: -121.498 },
            title: "46259",
        },
        {
            position: { lat: 34.936, lng: -120.998 },
            title: "46011",
        },
        {
            position: { lat: 35.371, lng: -120.859 },
            title: "MBXC1",
        }

    ];

    // {
    //     position: { lat: , lng: },
    //     title: "",
    // }

    const diamondSymbol = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'red',
        fillOpacity: 1,
        strokeColor: 'white',
        strokeWeight: 1,
        scale: 10,
    };

    //Create the markers.
    locations.forEach(({ position, title }, i) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${title}`,
            icon: diamondSymbol,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", ({ domEvent, latLng }) => {
            const { target } = domEvent;


            titleH.textContent = "Buoy " + marker.title;
            paragraph.innerHTML = "loading...";

            const apiUrl = '/waveapp/buoy.py?loc=' + marker.title;
            getData(apiUrl)
                .then(data => {
                    generateHTML(data);
                })
                .catch(error => {
                });

        });
    });

}

function getData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        });
}


function generateHTML(data) {
    const innerhtml = printKeyValuePairs(data);
    paragraph.innerHTML = innerhtml;
}

function printKeyValuePairs(jsonObject) {
    let result = '';

    for (const key in jsonObject) {
        if (Object.hasOwnProperty.call(jsonObject, key)) {
            result += `${key}: ${jsonObject[key]}<br><br>`;
        }
    }

    return result;
}


initMap();





// const newFavorite = marker.title;
// const result = window.confirm("Do you want to add " + newFavorite + " to your favorites?");
// if (result) {
//     const storedListString = localStorage.getItem('favorites');
//     let storedList = [];
//     if (storedListString) {
//         storedList = JSON.parse(storedListString);
//         storedList.push(newFavorite);
//         localStorage.setItem('favorites', JSON.stringify(storedList));
//     } else {
//         const firstFavorite = [newFavorite];
//         localStorage.setItem('favorites', JSON.stringify(firstFavorite));
//     }
// }