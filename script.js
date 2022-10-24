const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const divide = document.getElementById('divide');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const equal = document.getElementById('equal');
const reset = document.getElementById('reset');
const del = document.getElementById('del');
const display = document.getElementById('display');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

one.addEventListener('click', () => {
    display.textContent += '1';
    console.log('clicked');
})
two.addEventListener('click', () => {
    display.textContent += '2';
    console.log('clicked');
})
three.addEventListener('click', () => {
    display.textContent += '3';
    console.log('clicked');
})
four.addEventListener('click', () => {
    display.textContent += '4';
    console.log('clicked');
})
five.addEventListener('click', () => {
    display.textContent += '5';
    console.log('clicked');
})
six.addEventListener('click', () => {
    display.textContent += '6';
    console.log('clicked');
})
seven.addEventListener('click', () => {
    display.textContent += '7';
    console.log('clicked');
})
eight.addEventListener('click', () => {
    display.textContent += '8';
    console.log('clicked');
})
nine.addEventListener('click', () => {
    display.textContent += '9';
    console.log('clicked');
})
zero.addEventListener('click', () => {
    display.textContent += '0';
    console.log('clicked');
})
plus.addEventListener('click', () => {
    display.textContent += ' + ';
    console.log('clicked');
})
minus.addEventListener('click', () => {
    display.textContent += ' - ';
    console.log('clicked');
})
multiply.addEventListener('click', () => {
    display.textContent += ' * ';
    console.log('clicked');
})
divide.addEventListener('click', () => {
    display.textContent += ' / ';
    console.log('clicked');
})
decimal.addEventListener('click', () => {
    display.textContent += '.';
    console.log('clicked');
})

equal.addEventListener('click', () => {
    console.log(display.textContent);
    let stringResult = display.textContent;
    let result = eval(stringResult);
    console.log(typeof(result));
    display.textContent = result;
})

reset.addEventListener('click', () => {
    display.textContent = '';
})

del.addEventListener('click', () => {
    let str = display.textContent;
    console.log(str);
    str = str.slice(0, -1);
    display.textContent = str
    console.log(str);
}) 



first.addEventListener("click", () => {
    console.log('clicked');
    document.getElementById("siteTheme").setAttribute('href', 'style.css')
});

second.addEventListener("click", () => {
    document.getElementById("siteTheme").setAttribute('href', 'theme2.css')
});

third.addEventListener("click", () => {
    document.getElementById("siteTheme").setAttribute('href', 'theme3.css')
});
