let count = 0;

function ativarMusica() {
    const audio = document.querySelector("audio");
    const btn_music = document.querySelector("button");
    if (count == 0) {
        count = 1;
        audio.currentTime = 0.1;
        audio.autoplay = true;
        audio.loop = true;
        audio.play();
        btn_music.innerHTML = "Desativar Música";
    } else {
        count = 0;
        audio.pause();
        btn_music.innerHTML = "Ativar Música";
    }
}

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