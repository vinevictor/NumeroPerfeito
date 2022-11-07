let perfeito = true;

function VerificaNumero() {
    let numero
    let divisores = [];
    let somaDosDivisores = 0;
    numero = parseInt(prompt("Digite o numero: "));
    for (let i = 1; i < numero; i++) {
        if (numero % i == 0) {
            divisores.push(i);
        }
    }
    divisores.forEach(x => {
        somaDosDivisores = somaDosDivisores + x;
    })
    if (somaDosDivisores == numero) {
        perfeito = true;
    } else {
        perfeito = false;
    }

    return perfeito;
}

VerificaNumero();
console.log(perfeito);