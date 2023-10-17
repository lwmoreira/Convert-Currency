const convertButton = document.querySelector(".button-convert")
const currencySelect = document.querySelector(".currency-select")
const currencySelectIn = document.querySelector(".currency-select-in")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

   

    const dolarToday = 4.85
    const euroToday = 5.27
    const libraToday = 5.27
    const bitcoinToday = 5.27
    const realToday = 1.00

    

    if(currencySelect.value ==  "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToday)
    }

    if(currencySelect.value ==  "euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
    }

    if(currencySelect.value ==  "libra") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue/libraToday)
    }

    if(currencySelect.value ==  "bitcoin") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue/bitcoinToday)
    }

    if(currencySelect.value ==  "real") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue/realToday)
    }
    
    

    if(currencySelectIn.value ==  "dolarin") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue)

}

if(currencySelectIn.value ==  "euroin") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue)

}

if(currencySelectIn.value ==  "librain") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue)

}

if(currencySelectIn.value ==  "bitcoinin") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue)

}

if(currencySelectIn.value ==  "realin") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}


}

function changeCurrencyIn() {

    const currencyName = document.getElementById("currency-name-in")
    const currencyImg = document.querySelector(".currency-img-in")


    if (currencySelectIn.value ==  "dolarin") {

        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if (currencySelectIn.value ==  "librain") {

        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"

        
    }

    if (currencySelectIn.value ==  "bitcoinin") {

        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"

        
    }

    if (currencySelectIn.value ==  "euroin") {

        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"

    }

    if (currencySelectIn.value ==  "realin") {

        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"

        
    }



}

    function changeCurrency() {

        const currencyName = document.getElementById("currency-name")
        const currencyImg = document.querySelector(".currency-img")




    if (currencySelect.value ==  "dolar") {

        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if (currencySelect.value ==  "libra") {

        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"

        
    }

    if (currencySelect.value ==  "bitcoin") {

        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"

        
    }

    if (currencySelect.value ==  "euro") {

        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"

    }

    if (currencySelect.value ==  "real") {

        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"

        
    }


   
    convertValues()

}

    currencySelect.addEventListener("change", changeCurrency)
    currencySelectIn.addEventListener("change", changeCurrencyIn)
    convertButton.addEventListener("click", convertValues)



