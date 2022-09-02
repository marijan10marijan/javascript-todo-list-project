

let input = document.querySelector('#input');
const addData = document.querySelector('#addData');
const div = document.querySelector('#data-container');
const clearData = document.querySelector('#clearData');


addData.addEventListener('click', display);


function display() {
    const inputValue = input.value;
    const paragraph = document.createElement('p');
    paragraph.innerText = inputValue;
    paragraph.classList.add('style-paragraph');
    div.appendChild(paragraph);

    input.value = "";

    paragraph.addEventListener('click', lineThrough);

    function lineThrough() {
        paragraph.style.textDecoration = 'line-through';
    }

    paragraph.addEventListener('dblclick', clearParagraph);

    function clearParagraph() {
        paragraph.style.display = 'none';
    }


}






