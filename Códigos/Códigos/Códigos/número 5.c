#include <stdio.h>

int ehBissexto(int ano) {
    return (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0);
}

int diasDesdeInicioAno(int dia, int mes, int ano) {
    int diasPorMes[] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    int totalDias = 0;

    
    if (ehBissexto(ano)) {
        diasPorMes[1] = 29;
    }

    for (int i = 0; i < mes - 1; i++) {
        totalDias += diasPorMes[i];
    }

    totalDias += dia;

    return totalDias;
}

int calcularDiferencaDias(int dia1, int mes1, int ano1, int dia2, int mes2, int ano2) {
    int diasTotal = 0;

        if (ano1 == ano2) {
        diasTotal = diasDesdeInicioAno(dia2, mes2, ano2) - diasDesdeInicioAno(dia1, mes1, ano1);
    } else {
        
        int diasAno1 = (ehBissexto(ano1) ? 366 : 365) - diasDesdeInicioAno(dia1, mes1, ano1);

        
        for (int ano = ano1 + 1; ano < ano2; ano++) {
            diasTotal += ehBissexto(ano) ? 366 : 365;
        }

                diasTotal += diasDesdeInicioAno(dia2, mes2, ano2);

                diasTotal += diasAno1;
    }

    return diasTotal;
}

int main() {
    int dia1, mes1, ano1, dia2, mes2, ano2;

    printf("Digite as datas no formato DD MM AAAA (digite 0 0 0 para encerrar):\n");

    while (1) {
        
        printf("Primeira data (mais antiga): ");
        scanf("%d %d %d", &dia1, &mes1, &ano1);

        if (dia1 == 0 && mes1 == 0 && ano1 == 0) {
            break;
        }

        
        printf("Segunda data (mais recente): ");
        scanf("%d %d %d", &dia2, &mes2, &ano2);

                if (ano1 > ano2 || (ano1 == ano2 && (mes1 > mes2 || (mes1 == mes2 && dia1 > dia2)))) {
            printf("Erro: A primeira data deve ser mais antiga que a segunda.\n");
            continue;
        }

       
        int diferencaDias = calcularDiferencaDias(dia1, mes1, ano1, dia2, mes2, ano2);
        printf("A diferença é de %d dias.\n\n", diferencaDias);
    }

    printf("Programa encerrado.\n");
    return 0;
}