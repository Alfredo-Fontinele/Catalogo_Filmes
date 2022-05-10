function mostrarMenu() {

    let menu_padrao_id = document.getElementById("menu_padrao");
    let logo_navbar_h1 = document.getElementById("logo_navbar_h1");
    let header_left = document.getElementById("header--left");
    let header = document.getElementById("header");
    let logo = document.getElementById("logo_navbar");
    let ul = document.getElementById("links");

    if (menu_padrao_id.style.display == "flex") {
        menu_padrao_id.style.display = "none";
        header.style.height = "80px";
        ul.style.flexDirection = "row";
        header_left.style.flexDirection = "row";
        logo.style.marginRight = "20px";
        logo_navbar_h1.style.fontSize = "20px";
    } else {
        menu_padrao_id.style.display = "flex";
        header.style.height = "280px";
        ul.style.flexDirection = "column";
        header_left.style.flexDirection = "column";
        logo.style.marginRight = "20px";
        logo_navbar_h1.style.fontSize = "20px";
    }
}

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