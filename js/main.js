const darkModeBtb = document.querySelector(".dark-mode-btn");
const body = document.body;
  
darkModeBtb.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        darkModeBtb.textContent = "Light Mode";
    } else {
        darkModeBtb.textContent = "Dark Mode";
    }
});