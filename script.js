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

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("dI9uvICj51TJQ7Z6Z"); // Erstatt med din User ID fra EmailJS
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();


let name = document.getElementById('name').value.trim();
let email = document.getElementById('email').value.trim();
let message = document.getElementById('message').value.trim();
let feedbackMessage = document.getElementById('feedback-message');

if (name === '' || email === '' || message === '') {
  feedbackMessage.style.color = 'red';
  feedbackMessage.innerHTML = 'Please fill out all fields.';
}

if (!validateEmail(email)) {
  feedbackMessage.style.color = 'red';
  feedbackMessage.innerHTML = 'Please enter a valid email address.';
}

let templateParams = {
  name: name,
  email: email,
  message: message
};

emailjs.send("service_portfolio", "template_ddwsgmd", templateParams)
    .then(function(response) {
        console.log("E-post sendt!", response.status, response.text);
        feedbackMessage.style.color = "green";
        feedbackMessage.textContent = "Message sent! I'll answer you as quick as possible.";
        document.getElementById("contact-form").reset();
    }, function(error) {
        console.log("Feil ved sending: ", error);
        feedbackMessage.style.color = "red";
        feedbackMessage.textContent = "Something went wrong! Try again later.";
    });

function validateEmail(email) {
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
});