//
//
//
var treasureArray = []
var totalMoves = 0;
var correctMoves = 0;
document.addEventListener("DOMContentLoaded", function () {
    createGrid();
    setupGame();
    // https://stackoverflow.com/questions/49680484/how-to-add-one-event-listener-for-all-buttons/49680660
    const buttons = document.querySelectorAll('.cellButton')
    buttons.forEach(function (currentBtn) {
        currentBtn.addEventListener('click', (event) => {
            var row = event.target.getAttribute("row");
            var column = event.target.getAttribute("column");
            if (treasureArray[row][column] == 1) {
                // success
                event.target.setAttribute("class", "succButton")
            } else {
                // fail
                event.target.setAttribute("class", "failButton")
            }
        })
    })
});


// https://stackoverflow.com/questions/36805663/what-is-the-most-efficient-way-to-create-a-clickable-grid-with-html-js
function createGrid(columns, rows) {
    var grid = document.getElementById("gameGrid");
    var rows = 20;
    var columns = 20;
    for (var i = 0; i < rows; i++) {
        var row = grid.insertRow();
        for (var j = 0; j < columns; j++) {
            var cell = row.insertCell();
            var button = document.createElement("button");
            button.className = "cellButton";
            button.setAttribute("row", i);
            button.setAttribute("column", j);
            button.setAttribute("img", "./unknown.png")
            cell.appendChild(button);
        }
    }
}

function setupGame() {
    var row;
    var column;
    var rowOfZeros = [];
    for (column = 0; column < 20; column++) {
        rowOfZeros.push(0);
    }
    for (row = 0; row < 20; row++) {
        treasureArray[row] = rowOfZeros;
    }
    var rowOfInterest = treasureArray[5];
    var cell = rowOfInterest[3]
    cell = 1;
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