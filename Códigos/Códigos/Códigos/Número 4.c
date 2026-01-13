#include <stdio.h>

int main() {
    int numero, invertido, digito1, digito2, digito4, digito5;

    
    printf("Digite um numero inteiro de 5 digitos: ");
    scanf("%d", &numero);

    
    if (numero < 10000 || numero > 99999) {
        printf("Erro: O numero nao tem 5 digitos.\n");
        return 1;
    }

    
    digito1 = numero / 10000;            
    digito2 = (numero / 1000) % 10;      
    digito4 = (numero / 10) % 10;        
    digito5 = numero % 10;               

    
    if (digito1 == digito5 && digito2 == digito4) {
        printf("O numero %d e um palindromo.\n", numero);
    } else {
        printf("O numero %d nao e um palindromo.\n", numero);
    }

    return 0;
}