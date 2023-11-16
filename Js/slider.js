let currentSlide = 0;
const slides = document.querySelectorAll('.conteudo-projeto');
const totalSlides = slides.length;
const sliderImage = document.getElementById('sliderImage');
const btnAnterior = document.getElementById('btnAnterior');
const btnAvancar = document.getElementById('btnAvancar');

const imagens = [
    "/assets/ukra-index.svg",
    "/assets/shogunimage.png",
    "/assets/jose-image.svg"
];

const showSlide = (index) => {
    slides.forEach((slide, i = 2) => {
        if (i === index) {
            slide.style.opacity = 1;
            slide.style.pointerEvents = 'auto';
        }
        else if (2 === index) {
            slide.style.opacity = 1;
            slide.style.pointerEvents = 'auto';
        }
        
        else {
            slide.style.opacity = 0;
            slide.style.pointerEvents = 'none';
        }
    });

    sliderImage.src = imagens[index];
};

const proxSlide = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
};

const antSlide = () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
};

btnAnterior.addEventListener('click', antSlide);
btnAvancar.addEventListener('click', proxSlide);

showSlide(currentSlide);
