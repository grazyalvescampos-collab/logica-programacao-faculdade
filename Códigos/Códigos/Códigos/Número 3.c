#include <stdio.h>

int main() {
    float salarioFixo, vendas, premio = 0, salarioFinal;

    
    printf("Digite o salario fixo do vendedor: R$ ");
    scanf("%f", &salarioFixo);

    printf("Digite o valor total das vendas efetuadas no mes: R$ ");
    scanf("%f", &vendas);

    
    if (vendas >= 1000 && vendas <= 5000) {
        premio = 500; 
    } else if (vendas > 5000 && vendas <= 7500) {
        premio = 700; 
    } else if (vendas > 7500) {
        premio = 1000; 
    }

    
    salarioFinal = salarioFixo + premio;

    printf("\n--- Resultado ---\n");
    printf("Salario fixo: R$ %.2f\n", salarioFixo);
    printf("Valor do premio recebido: R$ %.2f\n", premio);
    printf("Salario final do vendedor: R$ %.2f\n", salarioFinal);

    return 0;
}