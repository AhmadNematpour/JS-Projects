
const textarea = document.querySelector('#input-textarea');
const wordCount = document.querySelector('.word-count');
const charCount = document.querySelector('.char-count');

textarea.addEventListener('input', ()=> {
    //char counter
    charCount.textContent = textarea.value.length;

    //word counter
    let text = textarea.value.trim();
    wordCount.textContent = text.split(/\s+/).filter((item)=> item).length;
})

























