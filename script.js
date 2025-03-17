const textElement = document.getElementById('typing-text');
const text = 'Filmmaker, writer and programmer in-training';
let index = 0;

function typeEffect () {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;