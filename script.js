const btnCalcular = document.getElementById('calcular');

function calculoImc() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if ((altura <= 0) || (peso <= 0)) {
        resultado.classList.add('invalido');
        resultado.innerText = 'Peso ou Altura Invalidos';
    }
    else {
        resultado.classList.remove('invalido');
        let imc = 0;
        let status = '';

        imc = ((peso / (altura * altura)) * 10000).toFixed(2);

        if (imc <= 18.5) {
            status = '(Abaixo do Peso)'
        }

        else if ((imc >= 18.5) && (imc <= 24.9)) {
            status = '(Peso Normal)'
        }

        else if ((imc >= 25) && (imc <= 29.9)) {
            status = '(Sobrepeso)'
        }

        else if ((imc >= 30) && (imc <= 34.9)) {
            status = '(Obesidade Grau I)'
        }

        else if ((imc >= 35) && (imc <= 39.9)) {
            status = '(Obesidade Grau II)'
        }

        else if (imc >= 40) {
            status = '(Obesidade Grau III ou Mórbida)'
        }

        resultado.innerText = `Seu IMC é de ${imc} \n ${status}`
    }
}

btnCalcular.addEventListener('click', calculoImc);


// Light Mode
const btnLightMode = document.querySelector('.btnLightMode');

btnLightMode.addEventListener('click', lightMode);

function lightMode() {
    const body = document.querySelector('body');
    const container = document.querySelector('.container');

    body.classList.toggle('lightMode')
    container.classList.toggle('lightMode')
    resultado.classList.toggle('lightMode')
}
