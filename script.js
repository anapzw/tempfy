var selector = document.getElementById('seletor')
var input = document.getElementById('valor-temp')
var btn = document.getElementById('btn-converter')
var expandir = document.getElementById('resultado')
var grau1 = document.getElementById('grau1')
var grau2 = document.getElementById('grau2')
var respostaInt1 = document.getElementById('resposta1')
var respostaInt2 = document.getElementById('resposta2')

btn.addEventListener('click', function () {
    var opcaoSelecionada = selector.value
    if (opcaoSelecionada === 'nulo') {
        alert('Escolha uma temperatura!')
    } else if (input.value === '') {
        alert('Insira um valor!')
    } else if (opcaoSelecionada === 'nulo', input.value === '') {
        alert('Escolha uma temperatura e insira um valor!')
    } else if (opcaoSelecionada === 'Celsius') {
        converterParaCelsius()
    } else if (opcaoSelecionada === 'Fahrenheit') {
        converterParaFahrenheit()
    } else if (opcaoSelecionada === 'Kelvin') {
        converterParaKelvin()
    }
})

function converterParaCelsius() {
    grau1.innerHTML = 'Fahrenheit'
    respostaInt1.innerHTML = `${parseInt(input.value * 9 / 5) + 32}°F`
    grau2.innerHTML = 'Kelvin'
    respostaInt2.innerHTML = `${parseFloat(input.value) + 273.15}°K`
    expandir.style.display = "block"
}

function converterParaFahrenheit() {
    grau1.innerHTML = 'Celsius'
    respostaInt1.innerHTML = `${parseInt((input.value - 32) * 5 / 9)}°C`
    grau2.innerHTML = 'Kelvin'
    respostaInt2.innerHTML = `${parseInt((input.value - 32) * 5 / 9 + 273.15)}°K`
    expandir.style.display = "block"
}

function converterParaKelvin() {
    grau1.innerHTML = 'Celsius';
    var celsius = parseFloat(input.value) - 273.15;
    respostaInt1.innerHTML = `${celsius.toFixed(2)}°C`; 
    grau2.innerHTML = 'Fahrenheit';
    var fahrenheit = (parseFloat(input.value) - 273.15) * 9 / 5 + 32;
    respostaInt2.innerHTML = `${fahrenheit.toFixed(2)}°F`; 
    expandir.style.display = "block";
}