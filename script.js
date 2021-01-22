let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
typeof minValue == "number" ? minValue = Math.round(Math.random()) : minValue = minValue;
maxValue = isFinite ? maxValue = 100 : (maxValue <= 100)? maxValue = maxValue: maxValue = 100 ;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 1;
    gameRun = true;
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    orderNumberField.innerText = orderNumber;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `Вы загадали число ${answerNumber }?`;

})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            orderNumberField.innerText = orderNumber;
            ((orderNumber <= 1) ?
            answerField.innerText = `Вы загадали число ${answerNumber }?`:
            (orderNumber >= 3 && orderNumber <= 5 ) ?
            answerField.innerText = `Наверное, это число ${answerNumber }?`:
            answerField.innerText = `Да это легко! Ты загадал ${answerNumber }?`);
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || answerNumber == minValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            ((orderNumber <= 1) ?
            answerField.innerText = `Вы загадали число ${answerNumber }?`:
            (orderNumber <= 3 ) ?
            answerField.innerText = `Наверное, это число ${answerNumber }?`:
            answerField.innerText = `Да это легко! Ты загадал ${answerNumber }?`);
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        if (orderNumber <= 3){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
        } 

        if (orderNumber > 3 && orderNumber <=5 ) {
        answerField.innerText = `Я крут\n\u{1F60E}`
        gameRun = false;
        }

        if (orderNumber > 6 ) {
        answerField.innerText = `Так то\n\u{1F60E}`
        gameRun = false;
    }
}    
})

