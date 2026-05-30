const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");

  const icon = menuToggle.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

let button = document.querySelector(".btn");
function validateForm() {
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;

  if (name === "" || email === "") {
    alert("Input field must be filled");
    return false;
  } else {
    alert("Successfully submitted");
    return true;
  }
}

button.addEventListener("click", () => {
  validateForm();
});
