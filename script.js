let cells = document.querySelectorAll("#field td");
let modal = document.querySelector('#modal')
let gameOver = false;
let btnReload = document.querySelector('#btnReload')






function start(cells) {
    let gameOver = false;
    let i = 0;
    for (let cell of cells) {
        cell.addEventListener('click', function step() {
            //если игра кончена то выйти из функции
            if (gameOver) {
                return;
            }
            //крестик появляется на четное значение счетчик ноль на нечетное значение
            if (i % 2 == 0) {
                this.textContent = '✘';
            } else {
                this.textContent = '◯';
            }
            //удалить обработку клика чтобы крестик не менялся на нолик в этой ячейке
            this.removeEventListener('click', step);


            this.removeEventListener('click', step);
            //увеличить счетчик на 

            if (isWinner(cells)) {
                modal.textContent = `🎉ты победил поздравляю 🎉${this.textContent}`;
                gameOver = true;
                for (let cell of cells) {
                    cell.removeEventListener('click ', step)
                }


            } else if (i == 8) {
                modal.textContent = `НИЧЬЯ`;
                gameOver = 'true'
            }
            i++
        })
    }

}

function isWinner(cells) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

    ]
    // по очереди в цикле проверяются все возможные комбинации и в результате если есть совпавшие комбинации то
    // функция возврощает true
    for (let comb of combs) {
        if (cells[comb[0]].textContent == cells[comb[1]].textContent &&
            cells[comb[1]].textContent == cells[comb[2]].textContent &&
            cells[comb[0]].textContent != '') {
            return true;
        }

    }

}



//кнопка перезагрузки игры 
btnReload.addEventListener('click', () => {
    //перебрать и очистить все ячейки 
    for (let cell of cells) {
        cell.textContent = ''
        console.log(cell)
    }
    //очистить поле с выводом результатов 
    modal.textContent = "";
    //перезагрузить игру
    start(cells)
})




//увеличить счетчик
start(cells)

//cells =[td0 td1 td2]

