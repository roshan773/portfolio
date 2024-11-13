var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  // Remove self-moving animation by commenting out autoplay
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Adding keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // Enhanced Coverflow effect for breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true,
      },
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
      coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 80,
        modifier: 1,
        slideShadows: true,
      },
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      coverflowEffect: {
        rotate: 45,
        stretch: 0,
        depth: 120,
        modifier: 1,
        slideShadows: true,
      },
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
      coverflowEffect: {
        rotate: 55,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
    }
  },
});



// Skill data
const skills = [
  { name: 'HTML', level: 95, color: 'rgba(255, 99, 132, 0.8)' },
  { name: 'CSS', level: 90, color: 'rgba(54, 162, 235, 0.8)' },
  { name: 'Bootstrap', level: 85, color: 'rgba(75, 192, 192, 0.8)' },
  { name: 'jQuery', level: 80, color: 'rgba(153, 102, 255, 0.8)' },
  { name: 'JavaScript', level: 35, color: 'rgba(255, 206, 86, 0.8)' },
  { name: 'Canva', level: 100, color: 'rgba(255, 159, 64, 0.8)' }
];

const skillsContainer = document.getElementById('skillsContainer');

// Render each skill as a progress bar
skills.forEach(skill => {
  const skillBarContainer = document.createElement('div');
  skillBarContainer.className = 'skill-bar-container';

  const skillName = document.createElement('div');
  skillName.className = 'skill-name';
  skillName.textContent = `${skill.name} (${skill.level}%)`;

  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';

  const progress = document.createElement('div');
  progress.className = 'progress';
  progress.style.width = `${skill.level}%`;
  progress.style.background = `linear-gradient(90deg, ${skill.color.replace('0.8', '1')}, ${skill.color.replace('0.8', '0.6')})`;
  progress.textContent = `${skill.level}%`;

  progressBar.appendChild(progress);
  skillBarContainer.appendChild(skillName);
  skillBarContainer.appendChild(progressBar);
  skillsContainer.appendChild(skillBarContainer);
});



// age changing
function calculateAge(birthyear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthyear;
}

document.getElementById('age').textContent = calculateAge(2003);

// $('#year').text(new Date().getFullYear());
document.getElementById('year').textContent = new Date().getFullYear();
