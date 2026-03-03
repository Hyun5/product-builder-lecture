const lottoNumbersContainer = document.getElementById('lotto-numbers');
const generateBtn = document.getElementById('generate-btn');

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    lottoNumbersContainer.innerHTML = '';
    for (const number of numbers) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = number;

        if (number <= 10) {
            numberDiv.style.backgroundColor = '#f4a261';
        } else if (number <= 20) {
            numberDiv.style.backgroundColor = '#e76f51';
        } else if (number <= 30) {
            numberDiv.style.backgroundColor = '#d62828';
        } else if (number <= 40) {
            numberDiv.style.backgroundColor = '#f77f00';
        } else {
            numberDiv.style.backgroundColor = '#fcbf49';
        }

        lottoNumbersContainer.appendChild(numberDiv);
    }
}

generateBtn.addEventListener('click', () => {
    const numbers = generateLottoNumbers();
    displayNumbers(numbers);
});

// Initial generation
const initialNumbers = generateLottoNumbers();
displayNumbers(initialNumbers);