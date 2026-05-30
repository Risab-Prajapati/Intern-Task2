const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");

  const icon = menuToggle.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

function validateForm() {
  let name = document.forms["contactForm"]["name"].value;
  let email = document.forms[contactForm]["email"];

  if (name == "" || email == "") {
    alert("Name and Email must be filled");
    return false;
  }
  return true;
}
