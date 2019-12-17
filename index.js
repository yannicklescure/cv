console.log(`Thank you for visiting my code.
If you read that message, visit https://github.com/yannicklescure/`);
const faSquares = document.querySelectorAll(".fa-square");
faSquares.forEach(faSquare => {
  faSquare.classList.add("small");
  faSquare.classList.add("ml-1");
});

const collapseBox = (anchor, box) => {
  box.style.display = "none";
  let openBox = false;
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    // event.currentTarget.innerHTML = '';
    if (openBox) {
      event.currentTarget.innerHTML = '<i class="fas fa-chevron-right"></i>';
      box.style.display = "none";
      openBox = false;
      // console.log('click false');
    } else {
      event.currentTarget.innerHTML = '<i class="fas fa-chevron-down"></i>';
      box.style.display = "block";
      openBox = true;
      // console.log('click true');
    }
  });
};

const experienceAnchor = document.querySelector('a[href="#collapseExperience"]');
const experienceBox = document.querySelector("#collapseExperience");
collapseBox(experienceAnchor, experienceBox);

const portfolioAnchor = document.querySelector('a[href="#collapsePortfolio"]');
const portfolioBox = document.querySelector("#collapsePortfolio");
collapseBox(portfolioAnchor, portfolioBox);

const url = "https://raw.githubusercontent.com/yannicklescure/cv/master/experience.json";
console.log(url);
fetch(url)
.then(response => response.json())
.then(data => {
  console.log(data);
});
