const redirectButton = document.querySelector('#redirect-btn');
redirectButton.addEventListener('click', () => {
  window.location.href = 'https://youtu.be/dQw4w9WgXcQ';
});
function startAnimation() {
  const button = document.querySelector('#redirect-btn');
  button.classList.add('bounce');
}

function stopAnimation() {
  const button = document.querySelector('#redirect-btn');
  button.classList.remove('bounce');
}

redirectButton.addEventListener('mouseover', startAnimation);
redirectButton.addEventListener('mouseout', stopAnimation);
