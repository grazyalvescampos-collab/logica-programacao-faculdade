#include <stdio.h>

void inverterVetor(int vetor[], int tamanho) {
    printf("Vetor invertido: ");
    for (int i = tamanho - 1; i >= 0; i--) {
        printf("%d ", vetor[i]);
    }
    printf("\n");
}

int main() {
    int vetor[] = {3, 5, 7, 9};
    int tamanho = sizeof(vetor) / sizeof(vetor[0]);

    inverterVetor(vetor, tamanho);

    return 0;
}
