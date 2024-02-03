let string = "";
let memory = 0;
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
        if (e.target.innerHTML === '=') {
            string = eval(string); 
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'C') {
            string = ""; 
            document.querySelector('input').value = string;
        }
         else if (e.target.innerHTML === 'M+') {
            memory += parseFloat(string); // Add current string value to memory
            string = ""; // Reset the string
        } 
        else if (e.target.innerHTML === 'M-') {
            memory -= parseFloat(string); // Subtract current string value from memory
            string = ""; // Reset the string
        } 
        else if (e.target.innerHTML === 'MR') {
            string = memory.toString(); // Set the string value to the value stored in memory
            document.querySelector('input').value = string; // Display the memory value in the input field
        }
         else {
            string = string + e.target.innerHTML; 
            document.querySelector('input').value = string;
        }
    });
});
