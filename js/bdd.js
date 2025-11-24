console.log('Olá, Javascript')

var userName = 'Fabrício'

document.getElementById('user-name').innerHTML = userName

//controle de fluxos //


/* let saldo = 1000

function saque(valor) {

    if (valor > saldo) {
        console.log('valor do saque superior ao saldo')
    } else if (valor > 700) {
        console.log('valor do saque é superior ao maximo permitido por operação')

    } else {
        saldo = saldo - valor
    }

}

saque(701)

console.log(saldo) */

/* 
Cenário 1: Saque com sucesso 

Dado que meu saldo é de 1000 reais 
Quando faço um saque de 500 reais
Então o valor do saque deve deduzir do meu saldo  */

/* Cenário 2: Saque com valor superior ao saldo
Dado que meu saldo é de 1000 reais 
Quando faço um saque de 1001 reais
Então não deve deduzir o saldo e deve mostrar uma mensagem de alerta informando que o valor não é permitido  */

/* Cenário 3: Saque com valor máximo 
dado que meu saldo de 1000 
e meu valor máximo é de 700 (Confirmado pelo PO com o cliente) 
quando faço um valor máximo de 701 reais 
então não deve deduzir do meu saldo 
E deve mostrar uma mensagem de alerata informando que o valor é superior ao maximo permitido 
  */



