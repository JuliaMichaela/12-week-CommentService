const blockComments = document.querySelector('.block_comments');
const btnComments = document.querySelector('.comment_button');
const author =document.querySelector('#author');
const avatar = document.querySelector('#picture');










//На этой неделе мы создадим сервис комментариев. В нём будет три поля ввода:

//Поле для ввода имени. Сделайте интерфейс преобразования имени, который учтёт, все нюансы — лишние пробелы, отсутствие больших букв в имени и прочее. 
//Например, было введено пользователем : `иВаН` .
//Стало: `Иван` .
//- поле для ввода ссылки на аватар;
// - поле ввода сообщения. Необходимо реализовать отображение и добавление сообщений, а также функцию `checkSpam(str)`, заменяющую `'viagra'` или `'XXX'` на `***` ;
// - функция должна быть нечувствительна к регистру:






const input = document.querySelector('input');
const button = document.querySelector('button');
const container = document.querySelector('.wrapperList');

button.addEventListener ('click', createTask)

function createTask () {
    const li = document.createElement('li')
    li.textContent = input.value
    container.appendChild(li)
    input.value = ''
}

const list = document.querySelector ('ul');

list.addEventListener ('click', checkTask)

function checkTask(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done');
    }
}


// ИНТЕРФЕЙС ДЛЯ АНОНИМНЫХ КОММЕНТАРИЕВ
// let block = document.querySelector(".spam__block-comments");
// let inputComnt = document.querySelector(".spam__comments");
// let btnSpam = document.querySelector(".spam__button");
// let comments = [];

function checkSpam(str) {

    let spamCheck;

    spamCheck = str.replace(/viagra/ig, "***");
    spamCheck = spamCheck.replace(/XXX/ig, "***");
    return spamCheck;
}

function addComment() {

    let str = inputComnt.value;
    let strAdd = checkSpam(str);
    if (strAdd && strAdd !== " ") {
        comments.push(strAdd);
        inputComnt.value = '';
    }

    block.innerHTML = '';

    if (!comments.length) {
        return;
    }

    let html = '';

    comments.forEach((comment) => {
        html += `
            <div class="comment-block">${comment}</div>
        `;
    });

    block.innerHTML = html;
}

btnSpam.onclick = addComment;

inputComnt.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        addComment();
    }
});