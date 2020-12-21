const cell = document.getElementsByClassName("cell");
var nb_cas_joue = 0;

for (var i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", function (e) {
        e.preventDefault();
        if (this.textContent != "O" && this.textContent != "X") {
            this.innerHTML = '<p class="croix">X</p>';
            nb_cas_joue += 1;
            ai_turn();
        }
    });
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function ai_turn() {
    var playable = false;
    console.log("case joue = ", nb_cas_joue);
    var case_X = [];
    var case_O = [];
    for (var i = 0; i < cell.length; i++) {
        if (cell[i].textContent == "X") {
            case_X.push(i.toString());
            if (
                check_if_win(case_X, "0", "1", "2") ||
                check_if_win(case_X, "0", "4", "8") ||
                check_if_win(case_X, "3", "4", "5") ||
                check_if_win(case_X, "6", "7", "8") ||
                check_if_win(case_X, "2", "4", "6") ||
                check_if_win(case_X, "1", "4", "7") ||
                check_if_win(case_X, "0", "3", "6") ||
                check_if_win(case_X, "2", "5", "8")
            ) {
                alert("vous avez gagné");
                clean_cell(cell);
                return;
            }
        } else if (cell[i].textContent == "O") {
            case_O.push(i.toString());
            if (
                check_if_win(case_O, "0", "1", "2") ||
                check_if_win(case_O, "0", "4", "8") ||
                check_if_win(case_O, "3", "4", "5") ||
                check_if_win(case_O, "6", "7", "8") ||
                check_if_win(case_O, "2", "4", "6") ||
                check_if_win(case_O, "0", "3", "6") ||
                check_if_win(case_O, "1", "4", "7") ||
                check_if_win(case_O, "2", "5", "8")
            ) {
                alert("vous avez Perdu");
                clean_cell(cell);
                return;
            }
        }
    }
    if (nb_cas_joue == 5) {
        alert("Tie !");
        clean_cell(cell);
        return;
    }
    while (!playable) {
        const rand_cell = getRandomInt(9);
        if (cell[rand_cell].textContent != "X" && cell[rand_cell].textContent != "O") {
            cell[rand_cell].innerHTML = '<p class="croix">O</p>';
            playable = true;
        }
    }

    console.log("Case X = ", case_X);
    console.log("Case O = ", case_O);
    return;
}

function clean_cell(cell) {
    for (var i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '<p class="croix"></p>';
    }
    cell = [];
    nb_cas_joue = 0;
}

function check_if_win(cell, st_number, nd_number, rd_number) {
    return (
        cell.indexOf(st_number) >= 0 && cell.indexOf(nd_number) >= 0 && cell.indexOf(rd_number) >= 0
    );
}
