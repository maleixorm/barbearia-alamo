let slideIndex = 0;
mostrarSlides();

function mostrarSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) { slideIndex = 1 };
    
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(mostrarSlides, 3000);
}