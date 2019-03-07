function calculate() 
{
    "use strict";

    // Grab the form element
    var form = document.getElementById("get_form");

    // Attach an event to the form 
    form.addEventListener("submit", function(event)
    {
        // Prevent the browser from submitting the form
        event.preventDefault();

        // Grab the value of the inputs inside variables
        let firstNumber = document.getElementById("firstNumber").value,
        secondNumber = document.getElementById("secondNumber").value,
        operatorList = document.getElementById("operator"), 
        operator = "",
        selection_made = false,
        result = 0;

        /*
         Cycle through the operatorList element to check if one operator has been selected
         */
        for(let i = 0; i < operatorList.length; i++)
        {
            // Assign the i'th element in the array to operator
            operator = operatorList[i];

            // Check if i'th element in the array was selected
            if(operator.selected)
            {
                // Assign that value to the variable operator and break quit the loop
                operator = operator.value;
                selection_made = true; 
                break;
            }
        }

        // Coerce the input to numbers if it cannot assign false to the variables
        firstNumber = +firstNumber || false;
        secondNumber = +secondNumber || false;

        /** 
         *  Check if one operator was selected and if both of the user input 
         * was indeed numbers
         * */
        if(selection_made && (firstNumber && secondNumber))
        {
            // Switched to the matched case based on the operator variable
            switch(operator)
            {
                case "+":
                    result = firstNumber + secondNumber;
                    break;
                case "-":
                    result = firstNumber - secondNumber;
                    break;
                case "*":
                    result = firstNumber * secondNumber;
                    break;
                case "/":
                    result = firstNumber / secondNumber;
                    break;
                case "%":
                    result = firstNumber % secondNumber;
                    break;
                default:
                    alert("Error! wrong operator type must choose only one between (+,-,*,/,%) these operator.");
            }
            
        }
        else
        {
            alert("Error! the input field is empty or  invalid\nThe input field must contains only numbers or digit and you must choose one operator to perform calculation.");
        }

        if(firstNumber && secondNumber > 0)
        {
            // Write the result inside the div_res object;
            let div_res = document.getElementById("res");
            div_res.innerHTML = firstNumber + " " + operator + 
            " " + secondNumber + " = " + result;
        }
        
    }, false);
}

calculate();