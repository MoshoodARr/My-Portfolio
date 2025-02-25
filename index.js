// const element = document.querySelector(".container")

// function toggleTheme() {
//     element.classList.toggle("light-mode");
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const elements = document.querySelectorAll(".fade-in");
//     elements.forEach(el => el.classList.add("show"));
// })

function toggleTheme() {
    const element = document.querySelector(".container");
    element.classList.toggle("light-mode");
    localStorage.setItem("theme", element.classList.contains("light-mode") ? "light" : "dark");
}

window.onload = () => {
    if (localStorage.getItem("theme") === "light") {
        document.querySelector(".container").classList.add("light-mode");
    }
}


