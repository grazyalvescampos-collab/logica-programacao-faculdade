#include <stdio.h>

int main() {
    int vetor[100]; 
    int tamanho = 0;
    int valor;

       printf("Digite valores inteiros (negativo para encerrar):\n");
    while (1) {
        scanf("%d", &valor);
        if (valor < 0) {
            break;
        }
        vetor[tamanho] = valor;
        tamanho++;
    }

    int maioresQue5 = 0, somaPares = 0, somaImpares = 0;

    for (int i = 0; i < tamanho; i++) {
        if (vetor[i] > 5) {
            maioresQue5++;
        }
        if (vetor[i] % 2 == 0) {
            somaPares += vetor[i];
        } else {
            somaImpares += vetor[i];
        }
    }

    printf("\nResultados:\n");
    printf("1. O vetor: ");
    for (int i = 0; i < tamanho; i++) {
        printf("%d ", vetor[i]);
    }
    printf("\n2. Quantidade de valores maiores que 5: %d\n", maioresQue5);
    printf("3. Soma dos valores pares: %d\n", somaPares);
    printf("4. Soma dos valores ímpares: %d\n", somaImpares);
    printf("5. Quantidade total de valores armazenados: %d\n", tamanho);

    return 0;
}