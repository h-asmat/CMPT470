//
//
//
var treasureArray = []
var totalMoves = 0;
var correctMoves = 0;
document.addEventListener("DOMContentLoaded", function () {
    createGrid();
    setupGame();
    document.getElementById("resetButton").addEventListener("click", function () {
        totalMoves = 0;
        correctMoves = 0;
        treasureArray = [];
        resetCells();
        setupGame();
    });
    document.getElementById("solutionButton").addEventListener("click", function () {
        revealGame();
    });
});


// https://stackoverflow.com/questions/36805663/what-is-the-most-efficient-way-to-create-a-clickable-grid-with-html-js
function createGrid(columns, rows) {
    var grid = document.getElementById("gameGrid");
    var rows = 20;
    var columns = 20;
    var counter = 0;
    for (var i = 0; i < rows; i++) {
        var row = grid.insertRow();
        for (var j = 0; j < columns; j++) {
            var cell = row.insertCell();
            var button = document.createElement("button");
            button.className = "cellButton";
            button.setAttribute("index", counter);
            cell.appendChild(button);
            counter++;
        }
    }
}

function resetCells() {
    var grid = document.getElementById("gameGrid");
    grid.innerHTML = '';
    createGrid();
}

function revealGame() {
    var cell = 0
    for (cell = 0; cell < 400; cell++) {
        const cellButton = document.querySelector('[index="' + cell + '"]')
        if (treasureArray[cell] == 1) {
            cellButton.setAttribute("class", "succButton")

        }
    }
}

function setupGame() {
    var column;
    for (column = 0; column < 400; column++) {
        treasureArray.push(0);
    }

    // https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100
    const nums = [];
    while (nums.length !== 40) {
        var randomNum = Math.floor(Math.random() * 400) + 1;
        if (nums.includes(randomNum)) {
            continue;
        }
        nums.push(randomNum);
    }

    var rando = 0;
    for (rando = 0; rando < 40; rando++) {
        var index = nums[rando];
        treasureArray[index] = 1;
    }

    // https://stackoverflow.com/questions/49680484/how-to-add-one-event-listener-for-all-buttons/49680660
    const buttons = document.querySelectorAll('.cellButton')
    buttons.forEach(function (currentBtn) {
        currentBtn.addEventListener('click', (event) => {
            var index = event.target.getAttribute("index");
            totalMoves++;
            if (treasureArray[index] == 1) {
                // success
                event.target.setAttribute("class", "succButton")
            } else {
                // fail
                correctMoves++;
                if (correctMoves == 20) {
                    alert("LET'S GOOOOO!!! It only took you " + totalMoves + " moves to win!!!");
                }
                event.target.setAttribute("class", "failButton")
            }
        })
    })
}

class Person {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    descr() {
        return this.name + " " + this.age;
    }
}