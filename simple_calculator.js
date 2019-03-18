function calculate() 
{
    "use strict";

    var form = document.getElementById("get_form");

    form.addEventListener("submit", function(event)
    {
        // Prevent the browser from submitting the form
        event.preventDefault();

        // Collect the values of the inputs
        let firstNumber = document.getElementById("firstNumber").value,
        secondNumber = document.getElementById("secondNumber").value,
        operatorList = document.getElementById("operator"), 
        operator = "",
        selection_made = false,
        result = 0;


        //Check if one operator was selected by the user

        for (let i = 0; i < operatorList.length; i++) {

            operator = operatorList[i];


            if (operator.selected) {
                // Assign that value to the variable operator and break quit the loop
                operator = operator.value;
                selection_made = true; 
                break;
            }
        }

        // Coerce the input to numbers, if it cannot assign false to the variables
        firstNumber = +firstNumber || false;
        secondNumber = +secondNumber || false;

        if(selection_made && firstNumber && secondNumber) {
            //Use an object to hold the computed value of each operator
          
            let operatorObj = {
                "+": firstNumber + secondNumber,
                "-": firstNumber - secondNumber,
                "*": firstNumber * secondNumber,
                "/": firstNumber / secondNumber,
                "%": firstNumber % secondNumber
            };

            // Access the value of the operator in the OperatorObj object
            result = operatorObj[operator];
        } else {
            alert("Error! the input field is empty or  invalid.\nThe input field must contains only numbers or digits.\nYou must also choose one operator to perform calculation.");
        }

        if (firstNumber && secondNumber > 0) {
            // Write the result inside the div_res object;
            let div_res = document.getElementById("res");
            div_res.innerHTML = firstNumber + " " + operator + 
            " " + secondNumber + " = " + result;
        }
        
    }, false);
}

calculate();