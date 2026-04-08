const themeBtn = document.getElementById("themeBtn");
const toggleBtn = document.getElementById("toggleBtn");
const projekty = document.getElementById("projekty");
const themeStyle = document.getElementById("themeStyle");

themeBtn.addEventListener("click", () => {
    if (themeStyle.getAttribute("href") === "red.css") {
        themeStyle.setAttribute("href", "green.css");
    } else {
        themeStyle.setAttribute("href", "red.css");
    }
});

toggleBtn.addEventListener("click", () => {
    projekty.classList.toggle("hidden");
});
