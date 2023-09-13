const textArea = document.querySelector("#textarea");
const remainingCaracter = document.querySelector("#textarea-remaining");
let maxChars = 250;

textArea.addEventListener("input", () => {
  const totalRemaining = maxChars - textArea.value.length;
  const color = totalRemaining < maxChars * 0.1 ? "red" : null;

  remainingCaracter.textContent = ` ${totalRemaining} کاراکتر باقی مانده`;
  remainingCaracter.style.color = color;
  if (totalRemaining === 0) {
    remainingCaracter.textContent = ` ${totalRemaining} مقدار مجاز تکمیل است`;
  }
});
