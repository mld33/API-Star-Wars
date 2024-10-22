const entitySelect = document.getElementById('entitySelect');
const idInput = document.getElementById('idInput');
const resultElement = document.getElementById('result');
const errorMessageElement = document.getElementById('errorMessage');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
    const entity = entitySelect.value;
    const id = idInput.value;
    const url = `https://swapi.py4e.com/api/${entity}/${id}`;

    resultElement.textContent = '';
    errorMessageElement.textContent = '';
    resultElement.textContent = 'Загрузка...';

fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error('Ошибка сети');
    }
        return response.json();
    })
    .then(data => {
        resultElement.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        errorMessageElement.textContent = error.message;
    });
});
