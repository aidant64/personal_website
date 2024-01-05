let original_lines = [];

function getOriginalLines() {
    const translatableElements = document.querySelectorAll('.translatable');

    translatableElements.forEach(element => {
        original_lines.push(element.innerText);
    });

    checkForIncludedLanguage();
}


function checkForIncludedLanguage() {
    const urlString = window.location.search;
    const urlParams = new URLSearchParams(urlString);

    if (urlParams.keys().next().done) {
        return;
    }

    const firstParamKey = urlParams.keys().next().value;
    if (firstParamKey != "lan") {
        return;
    }

    const firstParamValue = urlParams.get(firstParamKey);
    if (firstParamValue == "en") {
        return;
    }

    const selectElement = document.getElementById('languageSelector');
    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === firstParamValue) {
            selectElement.selectedIndex = i;
            translateAll(firstParamValue);
            return;
        }
    }

    alert('language code is not supported')
}


function applyTranslatedLines(trasnlated_lines_JSON_array) {
    var translatedLines = JSON.parse(trasnlated_lines_JSON_array);

    const allElements = document.querySelectorAll('.translatable');
    let j = 0;

    allElements.forEach(element => {
        element.innerText = translatedLines[j];
        element.classList.remove('loading');
        j++;
    });
}

function translateAll(languageCode) {
    const translatableElements = document.querySelectorAll('.translatable');
    translatableElements.forEach(element => {
        element.classList.add('loading');
    });


    const newURL = '?lan=' + languageCode;
    history.pushState({}, '', newURL);

    const currentTextContent = original_lines;
    const linesJSONObject = {
        textContentArray: currentTextContent,
        languageCode: languageCode
    };

    postRequest(linesJSONObject, languageCode);
}


function postRequest(dataJSON) {
    fetch('/home/translate/api.py', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataJSON)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(text => {
            applyTranslatedLines(text);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


getOriginalLines();

