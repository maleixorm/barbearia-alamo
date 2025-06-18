let slideIndex = 1;
mostrarSlides(slideIndex);

function maisSlides(n) {
    mostrarSlides(slideIndex += n);
}

function slideAtual(n) {
    mostrarSlides(slideIndex = n);
}

function mostrarSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let pontos = document.getElementsByClassName("ponto-item");
    
    if (n > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" ativo", "");
    }

    slides[slideIndex - 1].style.display = "block";
    pontos[slideIndex -1].className += " ativo";
}