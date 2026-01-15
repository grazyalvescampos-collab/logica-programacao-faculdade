/*MENU*/

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
});

/*VARIÁVEL CONSTANTE PARA O BOTÃO "chk" NA TAG LABEL NO HTML*/
const chk = document.getElementById('chk');
const titulos = document.getElementsByClassName('titulos');
const button = document.getElementsByTagName('button');

/*AÇÃO RESULTANTE A CHAMADA DA VARIÁVEL. NO CSS, TAGS COM ".dark" SOFREM ESSA AÇÃO*/
chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    titulos.classList.toggle('dark2');
    button.classList.toggle('darkbutton');
});

/*IMAGEM INTRODUÇÃO*/
const imagem = document.getElementById('imagem');

chk.addEventListener('change', () => {
        
if (chk.checked) {
    imagem.src = 'detalhes/aperto-de-mao (1).png'; // Troca a imagem para a imagem escura
} else {
    imagem.src = 'detalhes/aperto-de-mao.png'; // Troca a imagem de volta para a imagem clara
}});

/*CARROSSEL DE RELATOS*/
let currentSlide = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.relato');
    const indicators = document.querySelectorAll('#indicador i');

    currentSlide += n;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides.forEach((slide, index) => {
        slide.style.display = "none";
        indicators[index].classList.remove('active');
    });

    slides[currentSlide].style.display = "block";
    indicators[currentSlide].classList.add('active');
}