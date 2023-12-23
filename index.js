// conversion metrics
const mToFt = 3.281
const ltrToGal = 0.264
const kiloToPound = 2.204

let numberEl = document.getElementById("num-el")
const convertBtn = document.getElementById("convert-btn")
const convertMeterEl = document.getElementById("firstResult")
const convertLiterEl = document.getElementById("secondResult")
const convertMassEl = document.getElementById("thirdResult")




convertBtn.addEventListener("click", function() {
    //pass number to converter 
    let number = numberEl.value
    // Passing number as argument to the following functions
    meterToFeet(number)
    literToGallon(number)
    kgToPounds(number)
    
})


// function to convert meter to feet
function meterToFeet(num){
    let result1 = (num * mToFt).toFixed(3)
    let result2 = (num / mToFt).toFixed(3)
    
    
    display(num, result1, result2, convertMeterEl)

}

// funtion to convert volume
function literToGallon(num){
    let result1 = (num * ltrToGal).toFixed(3)
    let result2 = (num / ltrToGal).toFixed(3)
    
    
    display(num, result1, result2, convertLiterEl)
}

// function to convert mass
function kgToPounds(num){
    let result1 = (num * kiloToPound).toFixed(3)
    let result2 = (num / kiloToPound).toFixed(3)
    
    
    
    display(num, result1, result2, convertMassEl)
}

//function to display result
function display (numberToConvert, firstFigure, secondFigure, displayOption){
    if (displayOption ===  convertMeterEl){ 
        convertMeterEl.innerHTML = `${numberToConvert} meters = ${firstFigure} feet | ${numberToConvert} feet = ${secondFigure} meters`
    }
    if (displayOption ===  convertLiterEl) {
         convertLiterEl.innerHTML = `${numberToConvert} liters = ${firstFigure} gallons | ${numberToConvert} gallons = ${secondFigure} liters`
    } 
    if (displayOption ===  convertMassEl){
        convertMassEl.innerHTML = `${numberToConvert} kilos = ${firstFigure} pounds | ${numberToConvert} pounds = ${secondFigure} kilos`
    }
 
}

