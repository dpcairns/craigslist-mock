const myButton = document.getElementById('cool-button');

myButton.addEventListener('click', () => {
    const myInput = document.getElementById('cool-input');
    const userInput = myInput.value;
    const coolDiv = document.getElementById('cool-div');

    coolDiv.textContent = userInput;
});