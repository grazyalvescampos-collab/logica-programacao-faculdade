#include <stdio.h>

int main() {
    int n, soma, divisor;

    do {
        printf("\nDigite um número inteiro positivo (ou 0 para sair): ");
        scanf("%d", &n);

        if (n == 0) {
            printf("Encerrando o programa. Até mais!\n");
            break;
        }

        if (n < 0) {
            printf("Por favor, insira um número positivo!\n");
            continue;
        }

        soma = 0;

        
        printf("Divisores de %d: ", n);
        for (divisor = 1; divisor <= n / 2; divisor++) {
            if (n % divisor == 0) {
                soma += divisor;
                printf("%d ", divisor);
            }
        }

        printf("\nSoma dos divisores (excluindo o próprio número): %d\n", soma);

        
        if (soma == n) {
            printf("O número %d é perfeito porque a soma de seus divisores (%d) é igual a ele.\n", n, soma);
        } else {
            printf("O número %d não é perfeito porque a soma de seus divisores (%d) não é igual a ele.\n", n, soma);
        }
    } while (1);

    return 0;
}