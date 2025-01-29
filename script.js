function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

function palindromeChecker() {
    const inputText = document.getElementById("inputText").value.trim();
    const result = document.getElementById("result");

    if (inputText === "") {
        result.textContent = "Please enter a word!";
        result.className = "error";
        return;
    }

    if (isPalindrome(inputText)) {
        result.textContent = `"${inputText}" is a Palindrome ✅`;
        result.className = "success fadeIn";
    } else {
        result.textContent = `"${inputText}" is NOT a Palindrome ❌`;
        result.className = "error fadeIn";
    }
}

function liveCheck() {
    document.getElementById("result").textContent = "Result will appear here";
    document.getElementById("result").className = "";
}

document.getElementById("checkButton").addEventListener("click", palindromeChecker);
