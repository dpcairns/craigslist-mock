const myButton = document.getElementById('cool-button');

myButton.addEventListener('click', () => {
    const myInput = document.getElementById('cool-input');
    const userInput = myInput.value;

    console.log(userInput);
    const coolDiv = document.getElementById('cool-div');

    console.log(coolDiv);
});