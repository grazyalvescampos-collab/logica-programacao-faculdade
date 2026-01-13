#include <stdio.h>

int main() {
    int idade, sexo;
    int totalIdade = 0, totalPessoas = 0;
    int totalMasculino = 0, feminino1825 = 0;

    printf("Digite a idade e o sexo (0 - masculino, 1 - feminino) de cada pessoa.\n");
    printf("Para encerrar, digite 0 como idade.\n");

    while (1) {
        printf("Idade: ");
        scanf("%d", &idade);
        
        if (idade == 0) {
            break;
        }

        printf("Sexo (0 - masculino, 1 - feminino): ");
        scanf("%d", &sexo);
        
        totalIdade += idade;
        totalPessoas++;

        if (sexo == 0) {
            totalMasculino++;
        } else if (sexo == 1 && idade >= 18 && idade <= 25) {
            feminino1825++;
        }
    }

    if (totalPessoas > 0) {
        double mediaIdade = (double)totalIdade / totalPessoas;
        printf("\nIdade média: %.2f\n", mediaIdade);
    } else {
        printf("\nNenhuma pessoa registrada.\n");
    }

    printf("Total de pessoas do sexo feminino na faixa de 18 a 25 anos: %d\n", feminino1825);
    printf("Total de pessoas do sexo masculino: %d\n", totalMasculino);

    return 0;
}

