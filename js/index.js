/*MENU*/

var btnMenu = document.getElementById('btn-menu')
var menu = document.getElementById('menu-mobile')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

/*VARIÁVEL CONSTANTE PARA O BOTÃO "chk" NA TAG LABEL NO HTML*/
const chk = document.getElementById('chk');
const faleConosco = document.getElementById('faleConosco');
const topicos = document.getElementsByClassName('topicos');
const linha = document.getElementsByClassName('linha');

/*AÇÃO RESULTANTE A CHAMADA DA VARIÁVEL. NO CSS, TAGS COM ".dark" SOFREM ESSA AÇÃO*/
chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    faleConosco.classList.toggle('white-text');
    topicos.classList.toggle('darktopics');
    linha.classList.toggle('darklinha')
});

/*ALTERA O ID "paragrafo2" PARA O TEXTO SOBRE O GRUPO*/ 
let count = 1

function myFunction() {
    if (count == 1) {
        document.getElementById("paragrafo2").innerHTML = "Somos um grupo formado por cinco estudantes da Universidade Augusto Motta (Unisuam) e que estão responsáveis por compartilhar informações crucias acerca da Insegurança Alimentar que acontece no Rio de Janeiro e no Brasil por meio deste site!";
        document.getElementById('btn').innerHTML = "Sobre nós";
        count = 0;
    } else if (count == 0) {
        document.getElementById("paragrafo2").innerHTML = "O nosso site terá como objetivo informar sobre a situação atual da fome, da insegurança alimentar no Brasil e como podemos ajudar a reverter essa situação, dando visibilidade as questões da fome no Estado do Rio de Janeiro.";
        document.getElementsByTagName("button").innerHTML = "Nosso objetivo";
        count = 1;
    }

}