const convertButton = document.querySelector('.button-convert')
const currencySelect = document.querySelector('.currency-select-convert')
const currencySelectToConvert = document.querySelector('.currency-select-convert')
const currencySelectConverted = document.querySelector('.currency-select-converted')

const convertValues = async () => {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')

  
    let total = 1
    
  
  

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())

    const dolar = data.USDBRL.low
    const euro = data.EURBRL.low
    const bitcoin = data.BTCBRL.low
    const real = 1.00
    console.log(data)

    if (currencySelectToConvert.value == 'dolarin') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * dolar
    }
    if (currencySelectToConvert.value == 'euroin') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * euro
    }
    if (currencySelectToConvert.value == 'bitcoin-in') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * bitcoin
    }

    if (currencySelectToConvert.value == 'realin') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * real
    }
   

    if (currencySelectConverted.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(total / dolar)
    }
    if (currencySelectConverted.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(total / euro)
    }
    if (currencySelectConverted.value == 'bitcoin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(total / bitcoin)
    }
    if (currencySelectConverted.value == 'real') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(total / real)
    }
}

function changeCurrencyToConvert() {
    const currencyName = document.getElementById("currency-name-convert")
    const currencyImage = document.querySelector(".currency-img-convert")

    if (currencySelect.value == "realin") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }
    if (currencySelect.value == "dolarin") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "euroin") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "bitcoin-in") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues ()
}

function changeCurrency() {
    const currencyNameConverted = document.getElementById('currency-name-converted')
    const currencyImageConverted = document.querySelector('.currency-img-converted')

    if (currencySelectConverted.value == 'dolar') {
        currencyNameConverted.innerHTML = 'Dólar Americano'
        currencyImageConverted.src = './assets/dolar.png'
    }
    if (currencySelectConverted.value == 'euro') {
        currencyNameConverted.innerHTML = 'Euro'
        currencyImageConverted.src = './assets/euro.png'
    }
    if (currencySelectConverted.value == 'bitcoin') {
        currencyNameConverted.innerHTML = 'Bitcoin'
        currencyImageConverted.src = './assets/bitcoin.png'
    }
    if (currencySelectConverted.value == "real") {
        currencyNameConverted.innerHTML = "Real"
        currencyImageConverted.src = "./assets/real.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrencyToConvert)
currencySelectConverted.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)