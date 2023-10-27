

const displayNumber = (number) =>{
    let numberCalculator = document.getElementById('display-result');
    console.log(numberCalculator.value)

    if(numberCalculator.value === '0'){
        numberCalculator.value = ""
        numberCalculator.value += number
    }else{
        numberCalculator.value += number
    }
}

const deleteNumberFromCalculator = () => {
    let numberCalculator = document.getElementById('display-result');

    numberCalculator.value = numberCalculator.value.slice(0, -1)
}

const clearResultCalculator = () => {
    let numberCalculator = document.getElementById('display-result');
    numberCalculator.value = 0
}

const calculateResult = () => {
    let numberCalculator = document.getElementById('display-result');

    if(numberCalculator !== 0){
        try{
            const result = evaluate(numberCalculator.value)
            numberCalculator.value = result
        }catch (error) {
            alert('Error: ' + error.message);
        }
    }else{
        alert('Masukkan angka kamu dulu')
    }
}

function evaluate(userInput) {
    return new Function('"use strict"; return (' + userInput + ')')();
}




