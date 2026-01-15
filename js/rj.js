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
const conclusão = document.getElementById('conclusão');


/*AÇÃO RESULTANTE A CHAMADA DA VARIÁVEL. NO CSS, TAGS COM ".dark" SOFREM ESSA AÇÃO*/
chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    conclusão.classList.toggle('dark2');
});


/*CONTADOR*/

document.addEventListener('DOMContentLoaded', () => {
    const contador = document.getElementById('contador');
    const final = 468;
    const duração = 2000;
    const incremento = final / (duração / 10);

    let inicio = 0;
    let contadorVisivel = false;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contadorVisivel = true;
                observer.disconnect();
                const intervalo = setInterval(() => {
                    inicio += incremento;
                    if (inicio >= final) {
                        clearInterval(intervalo);
                    }
                    contador.textContent = inicio.toFixed(0);
                }, 10);
            }
        });
    });

    observer.observe(contador);
});

/*ALTERAR A IMG-POLITICO*/
const imgPolitico = document.getElementById('img-politico');

chk.addEventListener('change', () => {
        
if (chk.checked) {
    imgPolitico.src = 'detalhes/politico (1).png'; // Troca a imagem para a imagem escura
} else {
    imgPolitico.src = 'detalhes/politico.png'; // Troca a imagem de volta para a imagem clara
}});

/*ALTERAR A IMG-FALTA DE APETITE*/
const imgApetite = document.getElementById('img-falta-de-apetite');

chk.addEventListener('change', () => {
        
if (chk.checked) {
    imgApetite.src = 'detalhes/falta-de-apetite (1).png'; // Troca a imagem para a imagem escura
} else {
    imgApetite.src = 'detalhes/falta-de-apetite.png'; // Troca a imagem de volta para a imagem clara
}});