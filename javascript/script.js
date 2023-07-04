"use strict";

// Counter increment
// const counters = document.querySelectorAll(".counter");

// counters.forEach((counter) => {
//    counter.innerText = "0";

//    const updateCounter = () => {
//       const target = +counter.getAttribute("data-target");
//       const c = +counter.innerText;

//       const increment = target / 500;

//       if (c < target) {
//          counter.innerText = `${Math.ceil(c + increment)}`;

//          setTimeout(updateCounter, 1);
//       } else {
//          counter.innerText = target;
//       }
//    };

//    updateCounter();
// });

const counterYears = document.querySelector(".counterYears");
const counterProjects = document.querySelector(".counterProjects");
const counterHours = document.querySelector(".counterHours");

const incrementHours = function (counter) {
   counterHours.innerText = "0";

   const updateCounter = () => {
      const target = +counterHours.getAttribute("data-target");
      const c = +counterHours.innerText;

      const increment = target / 300;

      if (c < target) {
         counterHours.innerText = `${Math.ceil(c + increment)}`;
         setTimeout(updateCounter, 1);
      } else {
         counterHours.innerText = target;
      }
   };

   updateCounter();
};

const incrementProjects = function (counter) {
   counterProjects.innerText = "0";

   const updateCounter = () => {
      const target = +counterProjects.getAttribute("data-target");
      const c = +counterProjects.innerText;

      const increment = target / 500;

      if (c < target) {
         counterProjects.innerText = `${Math.ceil(c + increment)}`;
         setTimeout(updateCounter, 90);
      } else {
         counterProjects.innerText = target;
      }
   };

   updateCounter();
};

const incrementYears = function (counter) {
   counterYears.innerText = "0";

   const updateCounter = () => {
      const target = +counterYears.getAttribute("data-target");
      const c = +counterYears.innerText;

      const increment = target / 500;

      if (c < target) {
         counterYears.innerText = `${Math.ceil(c + increment)}`;
         setTimeout(updateCounter, 600);
      } else {
         counterYears.innerText = target;
      }
   };

   updateCounter();
};

const odometro = document.querySelector(".odometro");
const odometroHeight = odometro.getBoundingClientRect().height;

function activarOdometro(entries) {
   const entry = entries[0];

   if (entry.isIntersecting) {
      incrementHours();
      incrementProjects();
      incrementYears();
   }
}
const observer = new IntersectionObserver(activarOdometro, {
   rootMargin: `${odometroHeight + 10}px`,
});

observer.observe(odometro);

// Slide courses
const elements = document.querySelectorAll(".odometro-content-slides-progress-element");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const containerBox = document.querySelector(".odometro-content-slides-container-wrapper");
const slides = document.querySelectorAll(".odometro-content-slides-container-wrapper-boxes");
const currentslide = document.querySelector(".odometro-content-slides-counter-current");
const maxSlides = document.querySelector(".odometro-content-slides-counter-number");

let current = 1;

maxSlides.innerHTML = `0${elements.length}`;
currentslide.innerHTML = `0${current}`;

btnNext.addEventListener("click", function () {
   current++;

   if (current > elements.length) {
      current = 1;
   }

   update();
});

btnPrev.addEventListener("click", function () {
   current--;

   if (current < 1) {
      current = 1;
   }

   update();
});

const update = function () {
   elements.forEach(function (element, idx) {
      if (idx < current) {
         element.classList.add("active");
         containerBox.style.marginLeft = `-${idx * 100}%`;
         currentslide.innerHTML = `0${current}`;
      } else {
         element.classList.remove("active");
      }
   });
};

// footer animation
const menus = document.querySelectorAll(".footer-content-coder-graph-options");
const dots = document.querySelectorAll(".dots");
const progressBar = document.querySelector(".circle-mark");

let currentValue = 1;

let menusArray = Array.from(menus);
let dotsArray = Array.from(dots);

menusArray.forEach(function (menu) {
   menu.addEventListener("click", function () {
      let idValue = menu.getAttribute("data-id");

      if (idValue == 1) {
         progressBar.style.height = "33%";
      } else if (idValue == 2) {
         progressBar.style.height = "63%";
      } else if (idValue == 3) {
         progressBar.style.height = "100%";
      }

      progressBar.style.width = menusArray.forEach(function (men) {
         men.classList.remove("active");
      });

      dotsArray.forEach(function (dot) {
         dot.classList.remove("active");
      });

      this.classList.add("active");

      var dotsIndex = menusArray.indexOf(this);
      dotsArray[dotsIndex + 1].classList.add("active");
   });
});
