
const btn = document.querySelector('.my-btn');
const alertBox = document.querySelector('.alert-box');
const closeBtn = document.querySelector('.close-btn');
let timer;

btn.addEventListener('click', () => {
    showAlertBox();
});

closeBtn.addEventListener('click', () => {
    hideAlertBox();
    clearTimeout(timer);
});

function showAlertBox() {
    alertBox.classList.remove('hide');
    alertBox.classList.add('show');
    if(alertBox.classList.contains('hidden')) {
        alertBox.classList.remove('hidden');
    }
    timer = setTimeout(function() {
        hideAlertBox();
    },5000);
}


function hideAlertBox() {
    alertBox.classList.remove('show');
    alertBox.classList.add('hide');
}












