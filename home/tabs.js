
var tabElements = document.querySelectorAll('.tab');
var contentElements = document.querySelectorAll('.content');

function changeAddress(newPath){
    history.replaceState({}, '', newPath);
    return;
}

tabElements.forEach(function (tab, index) {
    tab.addEventListener('click', function () {

        tabElements.forEach(function (element) {
            element.classList.remove('selected');
        });
        contentElements.forEach(function (content) {
            content.classList.remove('selectedContent');
        });

        tab.classList.add('selected');
        contentElements[index].classList.add('selectedContent');

        if(index == 0){
            changeAddress('#education');
        } else if(index == 1){
            changeAddress('#research');
        } else if(index == 2){
            changeAddress('#team');
        } else if(index == 3){
           changeAddress('#project'); 
        } else if(index == 4){
           changeAddress('#apps'); 
        } 
    });
});




function checkForTab() {
    const currentURL = window.location.href;
    const hashes = currentURL.split('#');
    if(hashes.length == 1){
        changeAddress('#education')
        return;
    }


    const hash = hashes[1];


    tabElements.forEach(function (element) {
        element.classList.remove('selected');
    });
    contentElements.forEach(function (content) {
        content.classList.remove('selectedContent');
    });

    let index = 0;
    if(hash == 'research'){
        index = 1;
    }
    if(hash == 'team'){
        index = 2;
    }
    if(hash == 'project'){
        index = 3;
    }
    if(hash == 'apps'){
        index = 4;
    }

    tabElements[index].classList.add('selected');
    contentElements[index].classList.add('selectedContent');
    
}

checkForTab();

