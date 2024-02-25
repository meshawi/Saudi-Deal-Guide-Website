

// Get the button
var mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document smoothly
mybutton.addEventListener("click", function() {
  scrollToTop();
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}







// JavaScript code for handling category filter and city selection
document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll("input[name='category']");
  const cards = document.querySelectorAll(".property-card");
  const citySelection = document.getElementById("citySelection");

  function updateCardDisplay() {
    const selectedCategory = document.querySelector(
      "input[name='category']:checked"
    ).id;
    const selectedCity = document.querySelector("input[name='city']:checked");

    cards.forEach(function (card) {
      const cardCategories = card.dataset.categories.split(" ");
      const cardCity = card.dataset.city;

      const categoryCondition =
        selectedCategory === "all" || cardCategories.includes(selectedCategory);

      const cityCondition =
        selectedCategory !== "landCard" ||
        !selectedCity ||
        cardCity === selectedCity.value;

      card.style.display = categoryCondition && cityCondition ? "flex" : "none";
    });
  }

  categories.forEach(function (category) {
    category.addEventListener("change", function () {
      const selectedCategory = this.id;

      // Toggle city selection visibility for landCard
      citySelection.style.display =
        selectedCategory === "landCard" ? "block" : "none";

      updateCardDisplay();
    });
  });

  // Update card display based on selected city
  document.querySelectorAll("input[name='city']").forEach(function (cityRadio) {
    cityRadio.addEventListener("change", updateCardDisplay);
  });

  // Initial display considering both category and city
  categories.forEach(function (category) {
    if (category.checked) {
      const selectedCategory = category.id;
      const selectedCity = document.querySelector("input[name='city']:checked");

      cards.forEach(function (card) {
        const cardCategories = card.dataset.categories.split(" ");
        const cardCity = card.dataset.city;

        const categoryCondition =
          selectedCategory === "all" ||
          cardCategories.includes(selectedCategory);

        const cityCondition =
          selectedCategory !== "landCard" ||
          !selectedCity ||
          cardCity === selectedCity.value;

        card.style.display =
          categoryCondition && cityCondition ? "flex" : "none";
      });
    }
  });
});
