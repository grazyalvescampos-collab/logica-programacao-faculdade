/*MENU*/

var btnMenu = document.getElementById('btn-menu')
var menu = document.getElementById('menu-mobile')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
});

/*VARIÁVEL CONSTANTE PARA O BOTÃO "chk" NA TAG LABEL NO HTML*/
const chk = document.getElementById('chk');
const part1 = document.getElementsByClassName('part1');

/*AÇÃO RESULTANTE A CHAMADA DA VARIÁVEL. NO CSS, TAGS COM ".dark" SOFREM ESSA AÇÃO*/
chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    part1.classList.toggle('dark2');
});


/*CONTADOR*/

document.addEventListener('DOMContentLoaded', () => {
    const contador = document.getElementById('contador');
    const final = 62.8;
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
                    contador.textContent = inicio.toFixed(1);
                }, 10);
            }
        });
    });

    observer.observe(contador);
});

/*H2 ABAIXO DE 1000PX*/

function ajustarTitulo() {
    
    var titulo = document.getElementById('dados');

    if (window.innerWidth < 1000) {
        titulo.innerHTML = "NAVEGANDO ENTRE A <span>SEGURANÇA</span>, A <span>VULNERABILIDADE</span>. <br> <br> <h3 id='sub'>Clique sobre as classificações e saiba mais.</h3>";
    } else {
        titulo.innerHTML = "NAVEGANDO ENTRE A <span>SEGURANÇA</span> E A <span>VULNERABILIDADE</span>.";
    }
}

ajustarTitulo();
window.addEventListener('resize', ajustarTitulo);


/*SEGURANÇA ALIMENTAR*/

var verde = document.getElementById('verde');
var segurança = document.getElementById('segurança');

function verificarLargura1() {
    if (window.innerWidth > 1000) {
        verde.addEventListener('mouseover', () => {
            segurança.classList.add('dados');
        });

        verde.addEventListener('mouseout', () => {
            segurança.classList.remove('dados');
        });
    } else if (window.innerWidth < 1000){
        verde.addEventListener('mouseover', () => {
            segurança.classList.remove('dados');
        });
    }
}

verificarLargura1();

window.addEventListener('resize', verificarLargura1);


/**/

let count1 = 1

function myFunction1() {
    if (window.innerWidth < 1000) {
        if (count1 == 1) {
            document.getElementById("verde-p").innerHTML = "Acesso regular e permanente a alimentos de qualidade e em quantidade suficiente. <br> <br> 72,4% do total de domicílios possuem segurança alimentar no Brasil.";
            count1 = 0;

        } else if (count1 == 0) {
            document.getElementById("verde-p").innerHTML = "Acesso regular e permanente a alimentos de qualidade e em quantidade suficiente.";
            count1 = 1;
        }
    }
    else if (window.innerWidth > 1000) {
        if (count1 == 0) {
            document.getElementById("verde-p").innerHTML = "Acesso regular e permanente a alimentos de qualidade e em quantidade suficiente.";
            count1 = 1;}
    }
}

/*INSEGURANÇA ALIMENTAR LEVE*/

var amarelo = document.getElementById('amarelo');
var leve = document.getElementById('leve');

function verificarLargura2() {
    if (window.innerWidth > 1000) {
        amarelo.addEventListener('mouseover', () => {
            leve.classList.add('dados');
        });

        amarelo.addEventListener('mouseout', () => {
            leve.classList.remove('dados');
        });
    } else if (window.innerWidth < 1000){
        amarelo.addEventListener('mouseover', () => {
            leve.classList.remove('dados');
        });
    }
}

verificarLargura2();

window.addEventListener('resize', verificarLargura2);
/**/
let count2 = 1

function myFunction2() {
    if (window.innerWidth < 1000) {
        if (count2 == 1) {
            document.getElementById("amarelo-p").innerHTML = "Incerteza quanto ao acesso aos alimentos, na qual priorizam a quantidade e não a qualidade dos mesmos. <br> <br> 18,2% do total de domicílios sofrem com a insegurança alimentar leve no Brasil.";
            count2 = 0;
            
        } else if (count2 == 0) {
            document.getElementById("amarelo-p").innerHTML = "Incerteza quanto ao acesso aos alimentos, na qual priorizam a quantidade e não a qualidade dos mesmos.";
            count2 = 1;
        }
    }
    else if (window.innerWidth > 1000) {
        if (count2 == 0) {
            document.getElementById("amarelo-p").innerHTML = "Acesso regular e permanente a alimentos de qualidade e em quantidade suficiente.";
            count2 = 1;}
    }

}

/*INSEGURANÇA ALIMENTAR MODERADA*/

var laranja = document.getElementById('laranja');
var moderada = document.getElementById('moderada');

function verificarLargura3() {
    if (window.innerWidth > 1000) {
        laranja.addEventListener('mouseover', () => {
            moderada.classList.add('dados');
        });

        laranja.addEventListener('mouseout', () => {
            moderada.classList.remove('dados');
        });
    } else if (window.innerWidth < 1000){
        laranja.addEventListener('mouseover', () => {
            moderada.classList.remove('dados');
        });
    }
}

verificarLargura3();

window.addEventListener('resize', verificarLargura3);
/**/

count3 = 1

function myFunction3() {
    if (window.innerWidth < 1000) {
        if (count3 == 1) {
            document.getElementById("laranja-p").innerHTML = "Redução da qualidade e da quantidade dos alimentos. <br> <br> 5,3% do total de domicílios sofrem com a insegurança alimentar moderada no Brasil.";
            count3 = 0;
            
        } else if (count3 == 0) {
            document.getElementById("laranja-p").innerHTML = "Redução da qualidade e da quantidade dos alimentos.";
            count3 = 1;
        }
    }
    else if (window.innerWidth > 1000) {
        if (count3 == 0) {
            document.getElementById("laranja-p").innerHTML = "Acesso regular e permanente a alimentos de qualidade e em quantidade suficiente.";
            count3 = 1;}
    }

}

/*INSEGURANÇA ALIMENTAR GRAVE*/

var vermelho = document.getElementById('vermelho');
var grave = document.getElementById('grave');

function verificarLargura4() {
    if (window.innerWidth > 1000) {
        vermelho.addEventListener('mouseover', () => {
            grave.classList.add('dados');
        });

        vermelho.addEventListener('mouseout', () => {
            grave.classList.remove('dados');
        });
    } else if (window.innerWidth < 1000){
        vermelho.addEventListener('mouseover', () => {
            grave.classList.remove('dados');
        });
    }}

verificarLargura4();

window.addEventListener('resize', verificarLargura4);

count4 = 1

function myFunction4() {
    if (window.innerWidth < 1000) {
        if (count4 == 1) {
            document.getElementById("vermelho-p").innerHTML = "Presença da fome. <br> <br> 4,1% do total de domicílios sofrem com a insegurança alimentar grave no Brasil.";
            count4 = 0;
            
        } else if (count4 == 0) {
            document.getElementById("vermelho-p").innerHTML = "Presença da fome.";
            count4 = 1;
        }
    }
    else if (window.innerWidth > 1000) {
        if (count4 == 0) {
            document.getElementById("vermelho-p").innerHTML = "Acesso regular e permanente a alimentos de qualidade e em quantidade suficiente.";
            count4 = 1;}
    }
}

/*MAPA DO BRASIL - Norte*/

const norteBtn = document.getElementById('norte_btn');
const norteDados = document.getElementById('norte_dados');

norteBtn.addEventListener('click', function(evento) {
            evento.stopPropagation(); 
            if (norteDados.style.display === 'none') {
                norteDados.style.display = 'block';
            } else {
                norteDados.style.display = 'none';
            }
        });

document.addEventListener('click', ()=> {
            
            if (norteDados.style.display = 'block') {
                norteDados.style.display = 'none';
            }
        });

/*MAPA DO BRASIL - Nordeste*/

const nordesteBtn = document.getElementById('nordeste_btn');
const nordesteDados = document.getElementById('nordeste_dados');

nordesteBtn.addEventListener('click', function(evento) {
            evento.stopPropagation(); 
            if (nordesteDados.style.display === 'none') {
                nordesteDados.style.display = 'block';
            } else {
                nordesteDados.style.display = 'none';
            }
        });

document.addEventListener('click', ()=> {
            
            if (nordesteDados.style.display = 'block') {
                nordesteDados.style.display = 'none';
            }
        });

/*MAPA DO BRASIL - Centro-Oeste*/

        const centroBtn = document.getElementById('centro_btn');
        const centroDados = document.getElementById('centro_dados');
        
        centroBtn.addEventListener('click', function(evento) {
                    evento.stopPropagation(); 
                    if (centroDados.style.display === 'none') {
                        centroDados.style.display = 'block';
                    } else {
                        centroDados.style.display = 'none';
                    }
                });
        
        document.addEventListener('click', ()=> {
                    
                    if (centroDados.style.display = 'block') {
                        centroDados.style.display = 'none';
                    }
                });

/*MAPA DO BRASIL - Sudeste*/

const sudesteBtn = document.getElementById('sudeste_btn');
const sudesteDados = document.getElementById('sudeste_dados');

sudesteBtn.addEventListener('click', function(evento) {
            evento.stopPropagation(); 
            if (sudesteDados.style.display === 'none') {
                sudesteDados.style.display = 'block';
            } else {
                sudesteDados.style.display = 'none';
            }
        });

document.addEventListener('click', ()=> {
            
            if (sudesteDados.style.display = 'block') {
                sudesteDados.style.display = 'none';
            }
        });

/*MAPA DO BRASIL - Sul*/

const sulBtn = document.getElementById('sul_btn');
const sulDados = document.getElementById('sul_dados');

sulBtn.addEventListener('click', function(evento) {
            evento.stopPropagation(); 
            if (sulDados.style.display === 'none') {
                sulDados.style.display = 'block';
            } else {
                sulDados.style.display = 'none';
            }
        });

document.addEventListener('click', ()=> {
            
            if (sulDados.style.display = 'block') {
                sulDados.style.display = 'none';
            }
        });

/*IMAGEM PARTE 1 PRATO*/
const imgPrato = document.getElementById('img-prato');

chk.addEventListener('change', () => {
        
if (chk.checked) {
    imgPrato.src = 'detalhes/prato (1).png'; 
} else {
    imgPrato.src = 'detalhes/prato.png'; 
}});

/*IMAGEM PARTE 1 ONDA*/
const imgOndas = document.getElementById('img-ondas');

chk.addEventListener('change', () => {
        
if (chk.checked) {
    imgOndas.src = 'detalhes/ondas-de-agua (1).png'; 
} else {
    imgOndas.src = 'detalhes/ondas-de-agua.png'; 
}});

