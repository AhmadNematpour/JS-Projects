
function search() {
    let text = document.getElementById("text-to-search").value;
    const paragraph = document.getElementById('paragraph');

    text = text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    
    //modifier g and i
    let pattern = new RegExp(`${text}`, 'g');

    paragraph.innerHTML = paragraph.textContent.replace(pattern, match =>`<mark>${match}</mark>`);
}


















