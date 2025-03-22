let cells = document.querySelectorAll("#field td");
let modal = document.querySelector('#modal')
function start(cells) {
    let i = 0;
    for (let cell of cells) {
        cell.addEventListener('click', function step() {
            //крестик появляется на четное значение счетчик ноль на нечетное значение
            if (i % 2 == 0) {
                this.textContent = '✘';
            } else {
                this.textContent = '◯';
            }
            //удалить обработку клика чтобы крестик не менялся на нолик в этой ячейке
            this.removeEventListener('click', step);

            //увеличить счетчик на 
            i++
            if (isWinner(cells)) {
                modal.textContent = `🎉ты победил поздравляю 🎉${this.textContent}`
            }
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




//увеличить счетчик
start(cells)

//cells =[td0 td1 td2]

