#include <stdio.h>

int main() {
    int clube, cidade, totalEntrevistados = 0;
    float salario;

    
    int torcedores[5] = {0}; 
    float somaSalarios[5] = {0}; 
    int nascidosNiteroiOutrosClubes = 0;

    printf("Pesquisa sobre clubes de futebol em Niterói\n");
    printf("Digite 0 para finalizar a pesquisa.\n");

    while (1) {
        printf("\nQual o seu clube de futebol de preferência?\n");
        printf("1 – Flamengo\n2 – Vasco\n3 – Fluminense\n4 – Botafogo\n5 – Outros\n");
        printf("Digite sua escolha (ou 0 para sair): ");
        scanf("%d", &clube);

        if (clube == 0) {
            break;
        }

        if (clube < 1 || clube > 5) {
            printf("Opção inválida. Tente novamente.\n");
            continue;
        }

        printf("Qual o seu salário? ");
        scanf("%f", &salario);

        if (salario < 0) {
            printf("Salário não pode ser negativo. Tente novamente.\n");
            continue;
        }

        printf("Qual a sua cidade natal?\n1 – Niterói\n2 – Outra\n");
        printf("Digite sua escolha: ");
        scanf("%d", &cidade);

        if (cidade != 1 && cidade != 2) {
            printf("Opção inválida. Tente novamente.\n");
            continue;
        }

        
        totalEntrevistados++;
        torcedores[clube - 1]++;
        somaSalarios[clube - 1] += salario;

        
        if (cidade == 1 && clube == 5) {
            nascidosNiteroiOutrosClubes++;
        }
    }

    
    printf("\n--- Resultado da Pesquisa ---\n");

    
    for (int i = 0; i < 5; i++) {
        const char *nomeClube;
        switch (i + 1) {
            case 1: nomeClube = "Flamengo"; break;
            case 2: nomeClube = "Vasco"; break;
            case 3: nomeClube = "Fluminense"; break;
            case 4: nomeClube = "Botafogo"; break;
            case 5: nomeClube = "Outros"; break;
        }

        printf("%s:\n", nomeClube);
        printf("  Número de torcedores: %d\n", torcedores[i]);

        if (torcedores[i] > 0) {
            printf("  Média salarial: %.2f\n", somaSalarios[i] / torcedores[i]);
        } else {
            printf("  Média salarial: N/A\n");
        }
    }

    
    printf("\nNúmero de pessoas nascidas em Niterói que torcem para 'Outros': %d\n", nascidosNiteroiOutrosClubes);

    
    printf("Número total de pessoas entrevistadas: %d\n", totalEntrevistados);

    return 0;
}