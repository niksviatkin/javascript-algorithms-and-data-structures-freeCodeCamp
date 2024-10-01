const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");


const printResult = (input) =>  {
    if (input) {
        const isPalindrome = checkPalindrome(input);
        result.classList.remove(isPalindrome ? "error" : "success");
        result.classList.add(isPalindrome ? "success" : "error");
        result.innerHTML =  `<strong>${input}</strong> is ${isPalindrome ? "" : "not"} a palindrome `
    } else {
        alert("Please input a value")
    }
    
}

const checkPalindrome = (input) => {
    const cleanedInput = processInput(input);
    const reversedCleanedInput = cleanedInput.split('').reverse().join('');
    return cleanedInput === reversedCleanedInput;
}

const processInput = (input) => {
    const regex = /[^a-zA-Z0-9]/g;
    const result = input.replace(regex, '').toLowerCase();
    return result;
}


checkButton.addEventListener("click", () => printResult(textInput.value));