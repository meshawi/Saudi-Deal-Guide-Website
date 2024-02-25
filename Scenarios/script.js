document.addEventListener("DOMContentLoaded", function () {
  // Trigger the search when the form is submitted
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const searchInput = document.querySelector(".search-input");
    const searchedTags = searchInput.value.toLowerCase().split(" ");
    const blogItems = document.querySelectorAll(".blog-item");
wwww
    let tagFound = false;

    blogItems.forEach(function (blogItem) {
      const dataTags = blogItem.dataset.tag.toLowerCase().split(" ");

      // Check if any of the searched tags match the tags of the blog item
      if (searchedTags.some((tag) => dataTags.includes(tag))) {
        // Tag found in blog items, scroll to the blog item
        tagFound = true;
        blogItem.scrollIntoView({ behavior: "smooth" });
      }
    });

    if (!tagFound) {
      // Tag not found, show an alert
      alert("Tag not found!");
    }
  });
});




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