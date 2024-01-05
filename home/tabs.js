
var tabElements = document.querySelectorAll('.tab');
var contentElements = document.querySelectorAll('.content');

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
    });
});