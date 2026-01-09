function showGreeting() {
  const greetEl = document.getElementById('greetMessage');
  if (!greetEl) return;

  const hour = new Date().getHours();
  let message = 'Hello!';

  if (hour >= 5 && hour < 12) message = 'Good morning! ☀️';
  else if (hour >= 12 && hour < 17) message = 'Good afternoon! 🌤️';
  else if (hour >= 17 && hour < 21) message = 'Good evening! 🌇';
  else message = 'Good night! 🌙';

  greetEl.textContent = message;

  setTimeout(() => {
    greetEl.style.transition = 'opacity 0.5s';
    greetEl.style.opacity = '0';
    setTimeout(() => greetEl.remove(), 500);
  }, 5000);
}

window.addEventListener('load', showGreeting);

function setYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

window.addEventListener('load', setYear);

function toggleNav() {
  const nav = document.getElementById('navLinks');
  if (!nav) return;
  const isVisible = getComputedStyle(nav).display !== 'none';
  nav.style.display = isVisible ? 'none' : 'flex';
}

document.addEventListener('click', (e) => {
  const nav = document.getElementById('navLinks');
  const toggle = document.querySelector('.nav-toggle');
  if (!nav || !toggle) return;
  if (window.innerWidth <= 640 && !nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.style.display = 'none';
  }
});

function toggleCard(button) {
  if (!button) return;
  const details = button.nextElementSibling;
  if (!details) return;
  const isOpen = details.style.display === 'block';
  details.style.display = isOpen ? 'none' : 'block';
  button.textContent = isOpen ? 'Details' : 'Hide';
}

function validateForm() {
  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const phone = document.getElementById('phone')?.value.trim();
  const message = document.getElementById('message')?.value.trim();

  if (!name) return alert('Please enter your name.') && false;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) return alert('Please enter a valid email address.') && false;

  const phonePattern = /^\d{10}$/;
  if (!phone || !phonePattern.test(phone)) return alert('Phone must be exactly 10 digits.') && false;

  if (!message) return alert('Please enter a message.') && false;

  alert('Thanks! Your message has been sent (demo).');
  return false;
}
