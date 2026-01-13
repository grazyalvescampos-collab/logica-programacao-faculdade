#include <stdio.h>

void exibirMenu() {
    printf("\nEscolha uma opção do menu:\n");
    printf("a. Somar\n");
    printf("b. Subtrair\n");
    printf("c. Dividir\n");
    printf("d. Multiplicar\n");
    printf("e. Sair\n");
    printf("Digite sua escolha: ");
}

int main() {
    char opcao;
    float num1, num2, resultado;

    do {
        exibirMenu();
        scanf(" %c", &opcao); 
        switch (opcao) {
            case 'a':
                printf("Digite o primeiro número: ");
                scanf("%f", &num1);
                printf("Digite o segundo número: ");
                scanf("%f", &num2);
                resultado = num1 + num2;
                printf("Resultado: %.2f + %.2f = %.2f\n", num1, num2, resultado);
                break;

            case 'b':
                printf("Digite o primeiro número: ");
                scanf("%f", &num1);
                printf("Digite o segundo número: ");
                scanf("%f", &num2);
                resultado = num1 - num2;
                printf("Resultado: %.2f - %.2f = %.2f\n", num1, num2, resultado);
                break;

            case 'c':
                printf("Digite o primeiro número: ");
                scanf("%f", &num1);
                printf("Digite o segundo número: ");
                scanf("%f", &num2);
                if (num2 != 0) {
                    resultado = num1 / num2;
                    printf("Resultado: %.2f / %.2f = %.2f\n", num1, num2, resultado);
                } else {
                    printf("Erro: Divisão por zero não é permitida.\n");
                }
                break;

            case 'd':
                printf("Digite o primeiro número: ");
                scanf("%f", &num1);
                printf("Digite o segundo número: ");
                scanf("%f", &num2);
                resultado = num1 * num2;
                printf("Resultado: %.2f * %.2f = %.2f\n", num1, num2, resultado);
                break;

            case 'e':
                printf("Saindo da calculadora. Até mais!\n");
                break;

            default:
                printf("Opção inválida. Por favor, escolha novamente.\n");
                break;
        }
    } while (opcao != 'e');

    return 0;
}