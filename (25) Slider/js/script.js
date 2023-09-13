let items = document.querySelector(".slider-item").children;
let nextSlide = document.querySelector(".right-slide");
let prevSlide = document.querySelector(".left-slide");
let totalItems = items.length;
let index = 0;
nextSlide.onclick = () => {
  next("next");
};

prevSlide.onclick = () => {
  next("prev");
};

function next(direction) {
  if (direction === "next") {
    index++;
    if (index === totalItems) {
      index = 0;
    }
  } else {
    if (index === 0) {
      index = totalItems - 1;
    } else {
      index--;
    }
  }
  
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove('active');
  }

  items[index].classList.add('active'); 

}
