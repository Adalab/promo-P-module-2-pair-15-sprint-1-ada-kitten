const num1Input= document.querySelector('.js_num1');
const num2Input = document.querySelector('.js_num2');
const btn = document.querySelector('.js_btn');
const resDiv = document.querySelector('.js_res');

function cogerValor1() {
    const num1 = num1Input.value;
    return num1;
}

function multiplicar(numeroUno, numeroDos) {
    const resultado = numeroUno * numeroDos;
    return resultado;
}

function renderResultado(resultado) {
    resDiv.innerHTML=resultado;
}

// Cuando click en boton
// 1. Coger Num del primer input
// 2. Coger nm del segundo input
// 3. Hacer la operacin y obtener el result
// 4. Poner el resultado

function handleClickBtn() {
    console.log("Hola Sandra!");
    console.log("Hola Zahira!");
/*
    // 1. Coger Num del primer input
    const num1 = num1Input.value;
    // 2. Coger nm del segundo input
    const num2 = num2Input.value;
    // 3. Hacer la operacin y obtener el result
    const resultado = num1*num2
    // 4. Poner el resultado
    resDiv.innerHTML=resultado;
*/
    const num1 = cogerValor1();
    const num2 = num2Input.value;
    const resultado = multiplicar(num1, num2);
    renderResultado(resultado);

}

btn.addEventListener('click', handleClickBtn );

renderResultado('Esc4ribe los ds')



multiplicar(2,10);

const a=0;
const b= 12;
multiplicar(a,b);