// Create variable
const quote = document.querySelector('.quotes');
const userName = document.querySelector('.user-name');
const userRole = document.querySelector('.user-role');
const avatar = document.querySelector('.avatar');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

// Import data
const testimonials = [
  {
    text: `“ I\’ve been interested in coding for a while but never taken the jump, until now. I couldn\’t recommend this course enough. I\’m now in the job of my dreams and so excited about the \”`,
    name: 'Tanya Sinclair',
    role: 'UX Engineer',
    photo: './images/image-tanya.jpg',
  },
  {
    text: `“ If you want to lay the best foundation possible I\’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    name: 'John Tarkpor',
    role: 'Junior Front-end Developer',
    photo: './images/image-john.jpg',
  },
];

// Render
function render(i) {
  // Select testimonials
  const testimonial = testimonials[i];

  // Render text
  quote.textContent = testimonial.text;
  userName.textContent = testimonial.name;
  userRole.textContent = testimonial.role;

  // Render image
  avatar.src = testimonial.photo;
  avatar.alt = `${testimonial.name} portrait`;
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
  render(index);
}

btnPrev.addEventListener('click', () => go(-1));
btnNext.addEventListener('click', () => go(1));
