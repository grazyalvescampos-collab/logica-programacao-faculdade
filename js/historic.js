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
const chk = document.getElementById('chk')

/*AÇÃO RESULTANTE A CHAMADA DA VARIÁVEL. NO CSS, TAGS COM ".dark" SOFREM ESSA AÇÃO*/
chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
});

/*ALTERAR A IMAGEM*/
const imagem = document.getElementById('imagem');

chk.addEventListener('change', () => {
        
if (chk.checked) {
    imagem.src = 'detalhes/salada (1).png'; // Troca a imagem para a imagem escura
} else {
    imagem.src = 'detalhes/salada.png'; // Troca a imagem de volta para a imagem clara
}});

/*GRAFICO - A FOME TEM COR E GENERO*/

var config1 = {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [58.3, 25.8, 8.1, 7.8],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Homem branco'
            },
            {
                data: [47.5, 26, 13, 13.5],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Mulher Branca'
            },
            {
                data: [39.7, 30.2, 15.8, 14.3],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Homem negro'
            },
            {
                data: [30.1, 28.2, 19.7, 22],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Mulher negra'
            }
        ],
        labels: ["segurança alimentar", "Insegurança alimentar leve", "Insegurança alimentar moderada", "Insegurança alimentar grave"]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: 'left' },
        title: { display: true, text: 'Acompanhe os dados' },
        animation: { animateScale: true, animateRotate: true },
        tooltips: {
            callbacks: {
                label: function(item, data) {
                    return data.datasets[item.datasetIndex].label + ": " + data.labels[item.index] + ": " + data.datasets[item.datasetIndex].data[item.index];
                }
            }
        }
    }
};

var ctx1 = document.getElementById("grafico-cor_e_gen").getContext("2d");
new Chart(ctx1, config1);

/*A FOME TEM ESCOLARIDADE - MAIS DE 8 ANOS*/

var config2 = {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [65, 26, 5, 5],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Homem branco'
            },
            {
                data: [56, 27, 10, 8],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Mulher Branca'
            },
            {
                data: [47, 32, 12, 9],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Homem negro'
            },
            {
                data: [36, 31, 17, 16],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Mulher negra'
            }
        ],
        labels: ["segurança alimentar", "Insegurança alimentar leve", "Insegurança alimentar moderada", "Insegurança alimentar grave"]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Permite que o gráfico se ajuste ao contêiner
        legend: { position: 'left' },
        title: { display: true, text: 'MAIS DE 8 ANOS DE ESTUDO:' },
        animation: { animateScale: true, animateRotate: true },
        tooltips: {
            callbacks: {
                label: function(item, data) {
                    return data.datasets[item.datasetIndex].label + ": " + data.labels[item.index] + ": " + data.datasets[item.datasetIndex].data[item.index];
                }
            }
        }
    }
};

var ctx2 = document.getElementById("grafico-escola_mais8").getContext("2d");
new Chart(ctx2, config2);


/*A FOME TEM ESCOLARIDADE - MENOS DE 8 ANOS*/

var config3 = {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [49, 26, 13, 12],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Homem branco'
            },
            {
                data: [36, 25, 21, 18],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Mulher Branca'
            },
            {
                data: [28, 33, 20, 19],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Homem negro'
            },
            {
                data: [28, 26, 24, 23],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Mulher negra'
            }
        ],
        labels: ["segurança alimentar", "Insegurança alimentar leve", "Insegurança alimentar moderada", "Insegurança alimentar grave"]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: 'left' },
        title: { display: true, text: 'MENOS DE 8 ANOS DE ESTUDO:' },
        animation: { animateScale: true, animateRotate: true },
        tooltips: {
            callbacks: {
                label: function(item, data) {
                    return data.datasets[item.datasetIndex].label + ": " + data.labels[item.index] + ": " + data.datasets[item.datasetIndex].data[item.index];
                }
            }
        }
    }
};

var ctx3 = document.getElementById("grafico-escola_menos8").getContext("2d");
new Chart(ctx3, config3);

/* A FOME TEM EMPREGO */

var config4 = {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [60, 26, 7,8],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Homem branco'
            },
            {
                data: [49, 27, 13, 12],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Mulher Branca'
            },
            {
                data: [42, 31.2, 15, 13],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Homem negro'
            },
            {
                data: [32, 30, 19, 20],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Mulher negra'
            }
        ],
        labels: ["segurança alimentar", "Insegurança alimentar leve", "Insegurança alimentar moderada", "Insegurança alimentar grave"]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: 'left' },
        title: { display: true, text: 'COM EMPREGO:' },
        animation: { animateScale: true, animateRotate: true },
        tooltips: {
            callbacks: {
                label: function(item, data) {
                    return data.datasets[item.datasetIndex].label + ": " + data.labels[item.index] + ": " + data.datasets[item.datasetIndex].data[item.index];
                }
            }
        }
    }
};

var ctx4 = document.getElementById("grafico-emprego").getContext("2d");
new Chart(ctx4, config4);

//A FOME TEM DESEMPREGO//

var config5 = {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [33, 20, 22.2, 25.3],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Homem branco'
            },
            {
                data: [32, 15, 18, 36],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Mulher Branca'
            },
            {
                data: [17, 24, 25, 34],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Homem negro'
            },
            {
                data: [14, 20.8, 26, 40.5],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", "rgb(255, 0, 0)"],
                label: 'Mulher negra'
            }
        ],
        labels: ["segurança alimentar", "Insegurança alimentar leve", "Insegurança alimentar moderada", "Insegurança alimentar grave"]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: 'left' },
        title: { display: true, text: 'EM SITUAÇÃO DE DESEMPREGO:' },
        animation: { animateScale: true, animateRotate: true },
        tooltips: {
            callbacks: {
                label: function(item, data) {
                    return data.datasets[item.datasetIndex].label + ": " + data.labels[item.index] + ": " + data.datasets[item.datasetIndex].data[item.index];
                }
            }
        }
    }
};

var ctx5 = document.getElementById("grafico-desemprego").getContext("2d");
new Chart(ctx5, config5);

/*A FOME TEM PREÇO ATÉ 1/2 SALÁRIO*/

var config6 = {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [23, 31, 47 ],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", ],
                label: 'Homem branco'
            },
            {
                data: [20, 22, 58],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", ],
                label: 'Mulher Branca'
            },
            {
                data: [17, 27, 56],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", ],
                label: 'Homem negro'
            },
            {
                data: [14, 23, 63],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", ],
                label: 'Mulher negra'
            }
        ],
        labels: ["segurança alimentar", "Insegurança alimentar leve", "Insegurança alimentar moderada", ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: 'left' },
        title: { display: true, text: 'RENDIMENTO ATÉ 1/2 SALÁRIO MÍNIMO PER CAPITA' },
        animation: { animateScale: true, animateRotate: true },
        tooltips: {
            callbacks: {
                label: function(item, data) {
                    return data.datasets[item.datasetIndex].label + ": " + data.labels[item.index] + ": " + data.datasets[item.datasetIndex].data[item.index];
                }
            }
        }
    }
};

var ctx6 = document.getElementById("grafico-preço_inferior").getContext("2d");
new Chart(ctx6, config6);

/*A FOME TEM PREÇO SUPERIOR DE 1/2 SALÁRIO*/

var config7 = {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [67, 25, 6 ],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", ],
                label: 'Homem branco'
            },
            {
                data: [60, 28, 13],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", ],
                label: 'Mulher Branca'
            },
            {
                data: [52, 32, 17],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", ],
                label: 'Homem negro'
            },
            {
                data: [47, 33, 21],
                backgroundColor: ["rgb(0, 128, 0)", "rgb(255, 215, 0)", "rgb(255, 69, 0)", ],
                label: 'Mulher negra'
            }
        ],
        labels: ["segurança alimentar", "Insegurança alimentar leve", "Insegurança alimentar moderada", ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: 'left' },
        title: { display: true, text: 'RENDIMENTO IGUAL OU SUPERIOR A 1/2 SALÁRIO MÍNIMO PER CAPITA:' },
        animation: { animateScale: true, animateRotate: true },
        tooltips: {
            callbacks: {
                label: function(item, data) {
                    return data.datasets[item.datasetIndex].label + ": " + data.labels[item.index] + ": " + data.datasets[item.datasetIndex].data[item.index];
                }
            }
        }
    }
};

var ctx7 = document.getElementById("grafico-preço_superior").getContext("2d");
new Chart(ctx7, config7);