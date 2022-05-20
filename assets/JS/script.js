const navbar = document.querySelector(".header--right");
const button = document.querySelector(".menu_mobile");

button.addEventListener("click", () => {
    navbar.classList.toggle("active");
})


function mudarTema() {
    let body = document.getElementById("body");    

    if (body.classList.contains("body")) {
        body.classList.remove("body");
        body.classList.add("body2");
    } else {
        body.classList.add("body");
        body.classList.remove("body2");
    }
}