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
        },
        {
            position: { lat: 33.860, lng: -118.641 },
            title: "46221",
        },
        {
            position: { lat: 34.022, lng: -118.578 },
            title: "46268",
        },
        {
            position: { lat: 33.618, lng: -118.317 },
            title: "46222",
        },
        {
            position: { lat: 33.576, lng: -118.181 },
            title: "46253",
        },
        {
            position: { lat: 33.700, lng: -118.201 },
            title: "46256",
        },
        {
            position: { lat: 33.733, lng: -118.186 },
            title: "PRJC1",
        },
        {
            position: { lat: 33.716, lng: -118.246 },
            title: "AGXC1",
        },
        {
            position: { lat: 32.388, lng: -119.525 },
            title: "46047",
        },
        {
            position: { lat: 32.499, lng: -118.052 },
            title: "46086",
        },
        {
            position: { lat: 32.517, lng: -117.425 },
            title: "46232",
        },
        {
            position: { lat: 32.570, lng: -117.169 },
            title: "46235",
        },
        {
            position: { lat: 32.575, lng: -117.127 },
            title: "TIXC1",
        },
        {
            position: { lat: 32.714, lng: -117.174 },
            title: "SDBC1",
        },
        {
            position: { lat: 32.749, lng: -117.502 },
            title: "46258",
        },
        {
            position: { lat: 32.868, lng: -117.267 },
            title: "46254",
        },
        {
            position: { lat: 32.933, lng: -117.391 },
            title: "46225",
        },
        {
            position: { lat: 32.957, lng: -117.279 },
            title: "46266",
        },
        {
            position: { lat: 33.062, lng: -117.314 },
            title: "46274",
        },
        {
            position: { lat: 33.178, lng: -117.472 },
            title: "46224",
        },
        {
            position: { lat: 33.290, lng: -117.5 },
            title: "46275",
        },
        {
            position: { lat: 33.336, lng: -117.659 },
            title: "46277",
        },
        {
            position: { lat: 40.764, lng: -137.377 },
            title: "46006",
        },
        {
            position: { lat: 38.069, lng: -129.976 },
            title: "46059",
        },
        {
            position: { lat: 39.335, lng: -127.070 },
            title: "46411",
        },
        {
            position: { lat: 35.170, lng: -120.741 },
            title: "CPXC1",
        },
        {
            position: { lat: 35.169, lng: -120.754 },
            title: "PSLC1",
        },
        {
            position: { lat: 35.204, lng: -120.859 },
            title: "46215",
        },
        {
            position: { lat: 35.770, lng: -121.903 },
            title: "46028",
        },
        {
            position: { lat: 36.335, lng: -122.104 },
            title: "46239",
        },
        {
            position: { lat: 36.626, lng: -121.907 },
            title: "46240",
        },
        {
            position: { lat: 36.838, lng: -121.82 },
            title: "46279",
        },
        {
            position: { lat: 36.845, lng: -121.825 },
            title: "46276",
        },
        {
            position: { lat: 37.35, lng: -122.88 },
            title: "1801589",
        },
        {
            position: { lat: 37.754, lng: -122.839 },
            title: "46026",
        },
        {
            position: { lat: 37.788, lng: -122.634 },
            title: "46237",
        },
        {
            position: { lat: 37.806, lng: -122.466 },
            title: "FTPC1",
        },
        {
            position: { lat: 37.923, lng: -122.41 },
            title: "RCMC1",
        },
        {
            position: { lat: 37.937, lng: -123.463 },
            title: "46214",
        },
        {
            position: { lat: 38.235, lng: -123.317 },
            title: "46013",
        },
        {
            position: { lat: 39.225, lng: -123.98 },
            title: "46014",
        },
        {
            position: { lat: 40.295, lng: -124.732 },
            title: "46213",
        },
        {
            position: { lat: 40.713, lng: -124.54 },
            title: "46022",
        },
        {
            position: { lat: 40.769, lng: -124.239 },
            title: "NJLC1",
        },
        {
            position: { lat: 40.896, lng: -124.357 },
            title: "46244",
        },
        {
            position: { lat: 41.840, lng: -124.382 },
            title: "46027",
        },
        {
            position: { lat: 46.143, lng: -131.09 },
            title: "46005",
        },
        {
            position: { lat: 48.360, lng: -133.94 },
            title: "46036",
        },
        {
            position: { lat: 50.055, lng: -144.873 },
            title: "48400",
        },
        {
            position: { lat: 23.528, lng: -153.792 },
            title: "51000",
        },
        {
            position: { lat: 24.451, lng: -162.008 },
            title: "51001",
        },
        {
            position: { lat: 24.359, lng: -162.081 },
            title: "51101",
        },
        {
            position: { lat: 19.196, lng: -160.639 },
            title: "51003",
        },
        {
            position: { lat: 17.042, lng: -157.746 },
            title: "51002",
        },
        {
            position: { lat: 8.732, lng: 167.734 },
            title: "KWJP8",
        },
        {
            position: { lat: 7.079, lng: 171.384 },
            title: "52201",
        },
        {
            position: { lat: 7.081, lng: 158.244 },
            title: "52213",
        }
    ];

    // {
    //     position: { lat: , lng: },
    //     title: "",
    // }

    //Create the markers.
    locations.forEach(({ position, title }, i) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${title}`,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", ({ domEvent, latLng }) => {
            const { target } = domEvent;


            titleH.textContent = "Buoy " + marker.position;
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
            result += `${key}: ${jsonObject[key]}<br>`;
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