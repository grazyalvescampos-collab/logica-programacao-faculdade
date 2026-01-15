let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
});

/*VARIÁVEL CONSTANTE PARA O BOTÃO "chk" NA TAG LABEL NO HTML*/
const chk = document.getElementById('chk')

/*AÇÃO RESULTANTE A CHAMADA DA VARIÁVEL. NO CSS, TAGS COM ".dark" SOFREM ESSA AÇÃO*/
chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
});

/*CONTADOR*/

document.addEventListener('DOMContentLoaded', () => {
    const contador = document.getElementById('bolsa-familia');
    const final = 54.6;
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

document.addEventListener('DOMContentLoaded', () => {
    const contador = document.getElementById('alimentação-escolar');
    const final = 40;
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

document.addEventListener('DOMContentLoaded', () => {
    const contador = document.getElementById('cozinhas-solidarias');
    const final = 1.1;
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