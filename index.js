const faStars = document.querySelectorAll(".fa-square");
faStars.forEach(faStar => {
  faStar.classList.add("small");
  faStar.classList.add("ml-1");
});

const experienceAnchor = document.querySelector('a[href="#collapseExperience"]');
const experienceBox = document.querySelector("#collapseExperience");
experienceBox.style.display = "none";
let openExperienceBox = false;
experienceAnchor.addEventListener("click", (event) => {
  event.preventDefault();
  // event.currentTarget.innerHTML = '';
  if (openExperienceBox) {
    event.currentTarget.innerHTML = '<i class="fas fa-chevron-right"></i>';
    experienceBox.style.display = "none";
    openExperienceBox = false;
    console.log('click false');
  } else {
    event.currentTarget.innerHTML = '<i class="fas fa-chevron-down"></i>';
    experienceBox.style.display = "block";
    openExperienceBox = true;
    console.log('click true');
  }
});
