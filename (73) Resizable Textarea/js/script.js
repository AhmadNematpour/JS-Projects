
const textarea = document.querySelector('textarea');
textarea.addEventListener('keyup', (e)=> {
    let height = e.target.scrollHeight;
    textarea.style.height = `${height}px`; 
})



















