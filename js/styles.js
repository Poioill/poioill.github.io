$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 900,
        autoplay: true,
        autoplaySpeed: 1200,
        // waitForAnimate: false,
        appendArrows: $('.arrows'),
    }); 
});

document.addEventListener("DOMContentLoaded", function () {
    const gamesMenu = document.getElementById("games");
    const submenu = gamesMenu.querySelector(".submenu");
  
    gamesMenu.addEventListener("mouseenter", function () {
      submenu.style.display = "block";
    });
  
    gamesMenu.addEventListener("mouseleave", function () {
      submenu.style.display = "none";
    });

    // collapsing menu
    const toggleButton = document.getElementById("toggleButton");
    const collapsibleMenu = document.getElementById("collapsibleMenu");

    toggleButton.addEventListener("click", function () {
      collapsibleMenu.classList.toggle("collapsed");
    });

    // filter in portfolio
    const filterButton = document.getElementById("filterButton");
    const resetButton = document.getElementById("resetButton");
    const languageSelect = document.getElementById("languageSelect");
    const specialtySelect = document.getElementById("specialtySelect");
    const results = document.getElementById("results").children;

    filterButton.addEventListener("click", filterResults);
    resetButton.addEventListener("click", resetFilters);

    function filterResults() {
      const selectedLanguage = languageSelect.value;
      const selectedSpecialty = specialtySelect.value;

      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        const resultLanguage = result.getAttribute("data-language");
        const resultSpecialty = result.getAttribute("data-specialty");

        const languageMatch = selectedLanguage === "all" || selectedLanguage === resultLanguage;
        const specialtyMatch = selectedSpecialty === "all" || selectedSpecialty === resultSpecialty;

        if (languageMatch && specialtyMatch) {
          result.style.display = "block";
        } else {
          result.style.display = "none";
        }
      }
    }

    function resetFilters() {
      languageSelect.value = "all";
      specialtySelect.value = "all";

      for (let i = 0; i < results.length; i++) {
        results[i].style.display = "block";
      }
    }
});