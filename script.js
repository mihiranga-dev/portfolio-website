const nameHeading = document.querySelector('header h1');

function changeColor() {
    nameHeading.style.color = '#00aaff';
}

nameHeading.addEventListener('click', changeColor);