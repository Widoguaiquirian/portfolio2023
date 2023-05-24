"use strict";

// Dark theme
const darkThemeCheck = document.querySelector('input[name="theme"]');
const htmlElement = document.documentElement;

darkThemeCheck.addEventListener("change", function () {
   if (darkThemeCheck.checked) {
      htmlElement.setAttribute("data-theme", "dark");
   } else {
      htmlElement.setAttribute("data-theme", "light");
   }
});
