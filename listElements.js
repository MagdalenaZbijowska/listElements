const btn = document.querySelector('button');
let number = 1;

const addElement = function () {
    const li = document.createElement('li');
    li.textContent = number;
    document.body.appendChild(li);

    if (number % 3 == 0) { li.classList.add('blue') }

    number += 2;
}


btn.addEventListener('click', addElement);