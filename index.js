console.log(`Thank you for visiting my code.
If you read that message, visit https://github.com/yannicklescure/`);

if (window.innerWidth >= 768) {
  console.log(window.innerWidth);
  const columnLeft = document.querySelector('#column-left');
  columnLeft.classList.add('sticky-top');
}

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
  console.log('parsed json', data);
  data.forEach((work, index) => {
    const id = index + 1;
    let content = `
      <div id="work-${id}" class="d-print-none">
      <p><strong>${work.role}</strong> at ${work.company}<br>${work.period} &ndash; ${work.location}</p>
      <p class="text-muted">${work.companyDescription} ${work.roleDescription}</p>
    `;
    content += `<ul class="text-muted">`;
    work.tasks.forEach(task => {
      content += `
          <li>${task}</li>
      `;
    });
    content += `</ul></div>`;

    if (id === 4) {
      document.querySelector('#collapseExperience').insertAdjacentHTML('afterEnd', content);
      const printExperience = document.querySelector(`#work-${id}`);
      printExperience.classList.remove('d-print-none');
      printExperience.classList.add('d-none');
      printExperience.classList.add('d-print-block');
    } else {
      document.querySelector('#work-experience').insertAdjacentHTML('beforeEnd', content);
    }
  });

})
.catch(ex => {
  console.log('parsing failed', ex);
});
