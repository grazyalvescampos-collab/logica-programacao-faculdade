#include <stdio.h>

int main() {
    int cadastro[3];       
    float valor[3];        
    float total = 0.0;     
    int comprasAcima100 = 0, comprasAbaixo50 = 0;

    printf("Digite o número de cadastro e o valor pago por cada cliente:\n");

    
    for (int i = 0; i < 3; i++) {
        printf("Cliente %d:\n", i + 1);
        printf("Número de cadastro: ");
        scanf("%d", &cadastro[i]);
        printf("Valor pago: R$ ");
        scanf("%f", &valor[i]);

        
        total += valor[i];

        
        if (valor[i] > 100.0) {
            comprasAcima100++;
        }
        if (valor[i] < 50.0) {
            comprasAbaixo50++;
        }
    }

    
    float media = total / 3;

    
    printf("\nResultados:\n");
    printf("a. Valor total pago pelos três clientes: R$ %.2f\n", total);
    printf("b. Valor médio das compras: R$ %.2f\n", media);

    printf("c. Clientes que efetuaram compras superiores a R$ 100,00:\n");
    for (int i = 0; i < 3; i++) {
        if (valor[i] > 100.0) {
            printf("   - Cadastro %d (R$ %.2f)\n", cadastro[i], valor[i]);
        }
    }

    printf("d. Número de clientes que efetuaram compras inferiores a R$ 50,00: %d\n", comprasAbaixo50);

    return 0;
}