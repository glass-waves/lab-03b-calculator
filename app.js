// import functions and grab DOM elements

//ADDITION 
const addition_input_1 = document.getElementById('addition-input-1');
const addition_input_2 = document.getElementById('addition-input-2');
const addition_answer = document.getElementById('addition-answer');
const addition_button = document.getElementById('addition-button');

//SUBTRACTION
const subtraction_input_1 = document.getElementById('subtraction-input-1');
const subtraction_input_2 = document.getElementById('subtraction-input-2');
const subtraction_answer = document.getElementById('subtraction-answer');
const subtraction_button = document.getElementById('subtraction-button');

//MULTIPLICATION
const multiplication_input_1 = document.getElementById('multiplication-input-1');
const multiplication_input_2 = document.getElementById('multiplication-input-2');
const multiplication_answer = document.getElementById('multiplication-answer');
const multiplication_button = document.getElementById('multiplication-button');

//DIVISION
const division_input_1 = document.getElementById('division-input-1');
const division_input_2 = document.getElementById('division-input-2');
const division_answer = document.getElementById('division-answer');
const division_button = document.getElementById('division-button');

// initialize state

// set event listeners to update state and DOM

addition_button.addEventListener('click', () => {

    // console.log('addition button works!')

    const value_1 = addition_input_1.valueAsNumber;
    const value_2 = addition_input_2.valueAsNumber;
    const answer = value_1 + value_2;
    addition_answer.textContent = answer;
    // console.log(value_1);


})

subtraction_button.addEventListener('click', () => {

    // console.log('subtraction button works!')

    const value_1 = subtraction_input_1.valueAsNumber;
    const value_2 = subtraction_input_2.valueAsNumber;
    const answer = value_1 - value_2;
    subtraction_answer.textContent = answer;

})

multiplication_button.addEventListener('click', () => {

    // console.log('multiplication button works!')

    const value_1 = multiplication_input_1.valueAsNumber;
    const value_2 = multiplication_input_2.valueAsNumber;
    const answer = value_1 * value_2;
    multiplication_answer.textContent = answer;

})

division_button.addEventListener('click', () => {

    // console.log('division button works!')

    const value_1 = division_input_1.valueAsNumber;
    const value_2 = division_input_2.valueAsNumber;
    const answer = value_1 / value_2;
    division_answer.textContent = answer;

})