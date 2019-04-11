(function() {
    "use strict";

    // Grab the form element
    let form = document.getElementById("get_form");

    // Attach an event to the form 
    form.addEventListener("submit", function(event) {
    // Prevent the browser from submitting the form
        event.preventDefault();

        // Grab the value of the inputs inside variables
        let firstNumber = document.getElementById("firstNumber").value,
        secondNumber = document.getElementById("secondNumber").value,
        operatorList = document.getElementById("operator"), 
        result = 0;

        // Convert the input value into number
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
        
        // get the operator in the operator variable
        let operator = getOperator(operatorList);


        // Check if the user input is a valid number and one operator is choose
        if(!(isNaN(firstNumber) || isNaN(secondNumber)) && operator) {

            // Get the result of the computation in result varibale
            result = calc(operator, firstNumber, secondNumber);

            // Check if the result is not equal to inifnity
            if (result === Infinity || result === -Infinity) {
                alert('Error! Can\'t Divide a number by zero');
            } else {
                // Check if the result is not NaN
                if (!(isNaN(result))) {
                    // Write the result inside the div_res object;
                    let div_res = document.getElementById("res");
                    div_res.innerHTML = firstNumber + " " + operator + 
                    " " + secondNumber + " = " + result;
                } else {
                    alert('Error. can\'t have the remainder of a number divide by zero in numeric!');
                }
                
            }
            
        } else {
            alert("Error. Invalid input or operator not selected!");
        }           
        
    }, false);



// This function taks is to cycle through the OperatorList array 
// and check if one operator was selected and return it
function getOperator(operatorList) {
    let operator = "",
    selection_made = false;
    for (let i = 0; i < operatorList.length; i++) {        
        if (operatorList[i].selected) {
            selection_made = true;
            operator = operatorList[i].value;
            // console.log(selection_made); 
            break;
        }
    }

    return operator;
}

function calc(operator, firstNumber, secondNumber) {

    // Use an object to hold the computed value of each operator
    let operatorObj = {
        "+": firstNumber + secondNumber,
        "-": firstNumber - secondNumber,
        "*": firstNumber * secondNumber,
        "/": firstNumber / secondNumber,
        "%": firstNumber % secondNumber
} 
    // Return the value of the operator in the Operator object
    return  operatorObj[operator];
}
})();