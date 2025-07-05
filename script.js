const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const numberInput = document.getElementById("number");

const convertToRoman = () => {
    const num = parseInt(numberInput.value)
    if(!num){
        output.innerText = "Please enter a valid number";
        output.style.border = "2px solid red";
        return;
    } else if(num <= 1){
        output.innerText = "Please enter a number greater than or equal to 1";
         output.style.border = "2px solid red";
    }else if(num > 3999){
         output.innerText = "Please enter a number less than or equal to 3999";
         output.style.border = "2px solid red";
    }else{
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let roman = "";
    let remaining = num;

    for (let i = 0; i < values.length; i++) {
        while (remaining >= values[i]) {
            roman += numerals[i];
            remaining -= values[i];
        }
    }

    output.innerText = roman;
     output.style.border = "2px solid #667eea";
};
}


convertBtn.addEventListener("click", convertToRoman);

numberInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        convertToRoman();
    }
});

