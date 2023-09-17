const notification = document.querySelector("h1");
const select = document.querySelector(".select");
const button = document.getElementsByTagName("button");

for (btn of button) {
  btn.addEventListener("click", (e) => {
    const add = Number(notification.getAttribute("data-count") || 0);
    notification.setAttribute("data-count", add + 1);
    notification.classList.add("zero");


    let parent = e.target.parentNode;
    let clone = parent.cloneNode(true);
    select.appendChild(clone);
    clone.lastElementChild.innerText = 'خرید';
    if(clone) {
        notification.onclick = () => {
            select.classList.toggle('display');
        }
    }
  });
}
