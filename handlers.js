// import functions and grab DOM elements
import {
    additionMachine,
    subtractionMachine,
    multiplicationMachine,
    divisionMachine
} from './mathUtils.js';

//ADDITION 
const addition_input_1 = document.getElementById('addition-input-1');
const addition_input_2 = document.getElementById('addition-input-2');
const addition_answer = document.getElementById('addition-answer');


export function handleAdditionClick() {
    const value1 = addition_input_1.valueAsNumber;
    const value2 = addition_input_2.valueAsNumber;
    addition_answer.textContent = additionMachine(value1, value2);
}

//SUBTRACTION
const subtraction_input_1 = document.getElementById('subtraction-input-1');
const subtraction_input_2 = document.getElementById('subtraction-input-2');
const subtraction_answer = document.getElementById('subtraction-answer');


export function handleSubtractionClick() {
    const value1 = subtraction_input_1.valueAsNumber;
    const value2 = subtraction_input_2.valueAsNumber;
    subtraction_answer.textContent = subtractionMachine(value1, value2);
}

//MULTIPLICATION
const multiplication_input_1 = document.getElementById('multiplication-input-1');
const multiplication_input_2 = document.getElementById('multiplication-input-2');
const multiplication_answer = document.getElementById('multiplication-answer');


export function handleMultiplicationClick() {
    const value1 = multiplication_input_1.valueAsNumber;
    const value2 = multiplication_input_2.valueAsNumber;
    multiplication_answer.textContent = multiplicationMachine(value1, value2);
}

//DIVISION
const division_input_1 = document.getElementById('division-input-1');
const division_input_2 = document.getElementById('division-input-2');
const division_answer = document.getElementById('division-answer');


export function handleDivisionClick() {
    const value1 = division_input_1.valueAsNumber;
    const value2 = division_input_2.valueAsNumber;
    division_answer.textContent = divisionMachine(value1, value2);
}
