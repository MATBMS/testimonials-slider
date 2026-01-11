// DOM elements
const quote = document.querySelector('.quotes');
const userName = document.querySelector('.user-name');
const userRole = document.querySelector('.user-role');
const avatar = document.querySelector('.avatar');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

// Contents
const testimonials = [
  {
    text: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.”`,
    name: 'Tanya Sinclair',
    role: 'UX Engineer',
    photo: './images/image-tanya.jpg',
  },
  {
    text: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    name: 'John Tarkpor',
    role: 'Junior Front-end Developer',
    photo: './images/image-john.jpg',
  },
];

// Render with animation
function render(i) {
  // Select testimonials
  const testimonial = testimonials[i];

  // Fade out
  quote.style.opacity = '0';
  userName.style.opacity = '0';
  userRole.style.opacity = '0';
  avatar.style.opacity = '0';

  // Wait for fade out, then update content and fade in
  setTimeout(() => {
    // Update content
    quote.textContent = testimonial.text;
    userName.textContent = testimonial.name;
    userRole.textContent = testimonial.role;
    avatar.src = testimonial.photo;
    avatar.alt = `${testimonial.name} portrait`;

    // Fade in
    quote.style.opacity = '1';
    userName.style.opacity = '1';
    userRole.style.opacity = '1';
    avatar.style.opacity = '1';
  }, 300); // Match this to your transition duration
}

// Init
let index = 0;
render(index);

// Slider
function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}

function go(delta) {
  const next = clamp(index + delta, 0, testimonials.length - 1);
  if (next === index) return;
  index = next;
  // Disable inactive button
  btnPrev.disabled = index === 0;
  btnNext.disabled = index === testimonials.length - 1;
  render(index);
}

btnPrev.addEventListener('click', () => go(-1));
btnNext.addEventListener('click', () => go(1));

// Accessibility: keyboard support
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') go(-1);
  if (e.key === 'ArrowRight') go(1);
});
