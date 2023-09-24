
const copyText = document.querySelector('.copyText');
const button = document.querySelector('button');
const pasteText = document.querySelector('.pasteText');
const toolTip = document.querySelector('.toolTip');

button.addEventListener('click', () => {
    copyText.select();
    pasteText.value = "";

    if(document.execCommand('copy')) {
        pasteText.focus();
        toolTip.classList.add('show');
        setTimeout(function() {
            toolTip.classList.remove('show');
        },1200)
    }else {
        alert('مشکلی وجود دارد!');
    }
})













