
const init = () => {
    const localStorageInput = localStorage.getItem('input');
    const localStorageLimit = localStorage.getItem('limit');
    const inputTextElement = document.getElementById('inputText');
    inputTextElement.textContent = localStorageInput;
    const inputLimitElement = document.getElementById('limitText');
    inputLimitElement.textContent = localStorageLimit;
};

init();

const checkIfBoom = (value) => {
    const limit = localStorage.getItem('limit');
    const boomText = document.getElementById('boomText');
    console.log(Math.abs(value));
    if (Math.abs(value) >= limit) {
        boomText.textContent = 'BOMMMM!!!';
    }else {
        boomText.textContent = '';
    }
};

const handlePlusClick = () => {
    const textElement = document.getElementById('text');
    const textElementValue = Number(textElement.textContent);
    const inputValue = Number(localStorage.getItem('input'));
    const newValue = textElementValue + inputValue;
    textElement.textContent = newValue;
    checkIfBoom(newValue);
};

const handleMinusClick = () => {
    const textElement = document.getElementById('text');
    const textElementValue = Number(textElement.textContent);
    const inputValue = Number(localStorage.getItem('input'));
    const newValue = textElementValue - inputValue;
    textElement.textContent = newValue;
    checkIfBoom(newValue);
};

const submitInput = () => {
    const textElement = document.getElementById('inputText');
    const inputValue = document.getElementById('input').value;
    textElement.textContent = inputValue;
    localStorage.setItem('input', inputValue);
};

const submitLimit = () => {
    const textElement = document.getElementById('limitText');
    const limitValue = document.getElementById('limit').value;
    textElement.textContent = limitValue;
    localStorage.setItem('limit', limitValue);
};

