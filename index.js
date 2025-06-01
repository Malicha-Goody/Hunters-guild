const toggle = document.getElementById('mobile-menu');
const menu = document.querySelector('.navbar__menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

  function sendMessage(e) {
      e.preventDefault();
      alert("Message sent! (This is a placeholder)");
    }