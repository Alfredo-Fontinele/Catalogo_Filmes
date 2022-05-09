function mudarTema() {
    let body = document.querySelector("body");
    if (body.classList.contains("body")) {
        body.classList.remove("body");
        body.classList.add("body2");
    } else {
        body.classList.remove("body2");
        body.classList.add("body");
    }
}