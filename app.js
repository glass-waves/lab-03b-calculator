
// initialize state
import {
    handleAdditionClick,
    handleSubtractionClick,
    handleMultiplicationClick,
    handleDivisionClick
} from './handlers.js';

// grab buttons
const addition_button = document.getElementById('addition-button');
const subtraction_button = document.getElementById('subtraction-button');
const multiplication_button = document.getElementById('multiplication-button');
const division_button = document.getElementById('division-button');

//set up event listeners with reference to external handler functions
addition_button.addEventListener('click', handleAdditionClick);
subtraction_button.addEventListener('click', handleSubtractionClick);
multiplication_button.addEventListener('click', handleMultiplicationClick);
division_button.addEventListener('click', handleDivisionClick);