/* Створити функцію getMaxDigit(number) – 
яка отримує будь-яке число та виводить
найбільшу цифру в цьому числі. 
Приклади: 1236 -> 6, 987 -> 9, 385 -> 8*/

function getMaxDigit(num) {
    const numInner = parseInt(num);
    let maxNum = "";
    if (numInner) {
        let a = String(num);
        maxNum = Math.max(...a);
        document.getElementById("boxOne").innerHTML = `<p><b>Відповідь: </b>Отримано число  <span>${numInner}</span> , найбільша цифра в цьому числі  --  <span>${maxNum}</span></p>`;
    } else {
        document.getElementById("boxOne").innerHTML = "Отримано не число??";
        console.log("Це не число!!!");
    }

    return maxNum;
}

/* Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл*/

function exponentiation(num, count) {
    const numInner = parseInt(num);
    let countInner = parseInt(count);
    let counter = numInner;
    if (countInner < 0) {
        countInner = Math.abs(countInner);
        for (let i = 0; i < countInner - 1; i++) {
            counter *= numInner;
        }
        document.getElementById("boxTwo").innerHTML = `<p><b>Відповідь: </b>Отримано число  <span>${numInner}</span> , 
    перевести його в ступінь  --  <span>${countInner}</span>  =  <span>${counter}</span></p>`;
        return (counter = 1 / counter);
    } else if (countInner === 0) {
        document.getElementById("boxTwo").innerHTML = `<p><b>Відповідь: </b>Отримано число  <span>${numInner}</span> , 
    перевести його в ступінь  --  <span>${countInner}</span>  =  <span>${(counter = numInner / numInner)}</span></p>`;
        return (counter = numInner / numInner);
    } else if (numInner && countInner) {
        for (let i = 0; i < countInner - 1; i++) {
            counter *= numInner;
        }
        document.getElementById("boxTwo").innerHTML = `<p><b>Відповідь: </b>Отримано число  <span>${numInner}</span> , 
    перевести його в ступінь  --  <span>${countInner}</span>  =  <span>${counter}</span></p>`;
        return counter;
    } else {
        console.log("Це не число!!!");
    }
}

/*Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі); */

function formattedName(name) {
    const nameInner = name;
    let NormalName = "";
    if (!parseInt(name)) {
        for (let i = 0; i < name.length; i++) {
            NormalName = name[0].toUpperCase() + name.substring(1).toLowerCase();
        }
    } else {
        console.log("це не строка !!!");
    }
    document.getElementById("boxThree").innerHTML = `<p><b>Відповідь:</b> Введено імя  <span>${nameInner}</span> , 
    форматуєм  =  <span>${NormalName}</span></p>`;
    return NormalName;
}

/* Створити функцію, яка вираховує суму, що залишається після оплати податку
від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805*/

function tax(sum, one, two) {
    const sumInner = parseFloat(sum);
    const oneInner = parseFloat(one);
    const twoInner = parseFloat(two);
    let remainder = 0;
    let result;
    if (sumInner && oneInner && twoInner) {
        remainder += (sumInner * oneInner) / 100;
        remainder += (sumInner * twoInner) / 100;
        result = sumInner - remainder;
    } else {
        console.log("Це не цифри!!!!");
    }
    document.getElementById("boxFour").innerHTML = `<p><b>Відповідь:</b> Заплатили  <span>${sumInner}</span> , 
    Пенсійний фонд <span>${oneInner}</span> , Армія <span>${twoInner}</span> == залишок ${result}</p>`;
    return result;
}

/* Створити функцію, яка повертає випадкове ціле число в діапазоні
від N до M. Приклад: getRandomNumber(1, 10) -> 5*/

function getRandomNumber(one, two) {
    let result;
    const a = parseInt(one);
    const b = parseInt(two);
    if (a && b) {
        result = parseInt(Math.random() * (two - one) + one);
    } else {
        console.log("Це не число !!!");
    }
    document.getElementById("boxFive").innerHTML = `<p><b>Відповідь:</b> Випадкове число від  <span>${a}</span>  
    до  <span>${b}</span>  ==  ${result}</p>`;
    return result;
}

/*Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4 */

function countLetter(letter, word) {
    const letterInner = String(letter).toLowerCase();
    const wordInner = String(word).toLowerCase();
    let count = 0;
    if (letterInner && wordInner) {
        for (let i = 0; i <= wordInner.length; i++) {
            if (letterInner === wordInner[i]) {
                count += 1;
            }
        }
    } else {
        console.log("щось неправільно!!");
    }
    document.getElementById("boxSix").innerHTML = `<p><b>Відповідь:</b> Введена буква  <span>${letterInner}</span>,
    введене слово  <span>${wordInner}</span>,  буква зустрілася <span>${count}</span> разів </p>`;
    return count;
}

/* Створіть функцію, яка конвертує долари в гривні та навпаки
в залежності від наявності символа $ або UAH в рядку.
Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$ */

function convertCurrency(sum) {
    let result = "";
    const sumInner = parseInt(sum);
    let currency = String(sum).toLowerCase();
    const curs = 25;
    if (currency.indexOf("uah") > 0 && sumInner) {
        result = `${sumInner / curs} $`;
    } else if (currency.indexOf("$") > 0 && sumInner) {
        result = `${sumInner * curs} UAH`;
    } else {
        console.log("ERROR");
    }
    document.getElementById("boxSeven").innerHTML = `<p><b>Відповідь:</b> Віддали <span>${currency}</span>,
    отримали  <span>${result}</span></p>`;
    return result;
}
console.log(getMaxDigit("1234"));
console.log(exponentiation(5, 0));
console.log(formattedName("ПеТрО"));
console.log(tax(1000, "18", 1.5));
console.log(getRandomNumber(1, 10));
console.log(countLetter("а", "Асталавіста"));
console.log(convertCurrency("2500uah"));
