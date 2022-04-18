const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        let color = ["black", "white", "black", "black"];
        let ramdomNumber = Math.floor(Math.random() * color.length)
        cell.style.backgroundColor = color[ramdomNumber];
        cell.style.borderRadius = "100px";
        container.appendChild(cell).className = "grid-item";
    };
};

let rows = 40;
let cols = 40;
makeRows(rows, cols);

let etapeSuivante = document.getElementById("etapeSuivante");
let lecture = document.getElementById("lecture");
let pause = document.getElementById("pause")

etapeSuivante.addEventListener("click", () => {
    evolution(40, 40)
});

let action = "lecture";
lecture.addEventListener("click", () => {
    action = "lecture";
    evolutionAutomatique("lecture")
})

pause.addEventListener("click", () => {
    action = "pause";
})

function countColor(rows, cols, i) {
    let number = 0;
    if (i == 0) { // Si on est à la première ligne et première colonne
        if (container.childNodes[i + 1].style.backgroundColor == "white") {
            number++;
        }
        console.log(i + cols);
        if (container.childNodes[i + cols].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i + cols + 1].style.backgroundColor == "white") {
            number++;
        }
    } else if (i == (cols - 1)) { // Si on est à la première ligne et dernière colonne
        if (container.childNodes[i - 1].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i + cols].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i + cols - 1].style.backgroundColor == "white") {
            number++;
        }
    } else if (i > 0 && i < (cols - 1)) { // Si on est à la première ligne mais ni à la première ni dernière colonne
        if (container.childNodes[i - 1].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i + 1].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i + cols].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i + cols - 1].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i + cols + 1].style.backgroundColor == "white") {
            number++;
        }
    } else if (i % cols == 0 && i != ((cols * rows)) - rows) {
        // Si on est à la première colonne de n'importe quelle ligne sauf la dernière ligne
        if (container.childNodes[i - cols].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i - cols + 1].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i + 1].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i + cols].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i + cols + 1].style.backgroundColor == "white") {
            number++;
        }
    } else if (i % cols == (cols - 1) && i != (cols * rows) - 1) {
        // Si on est à la dernière colonne de n'importe quelle ligne sauf la dernière ligne
        if (container.childNodes[i - cols].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i - cols - 1].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i - 1].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i + cols].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i + cols - 1].style.backgroundColor == "white") {
            number++;
        }
    } else if (i == (cols * rows) - cols) { // Si on est à la dernière ligne et première colonne
        if (container.childNodes[i + 1].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i - cols].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i - cols + 1].style.backgroundColor == "white") {
            number++;
        }
    } else if (i == (cols * rows) - 1) { // Si on est à la dernière ligne  et dernière colonne
        if (container.childNodes[i - 1].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i - cols].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i - cols - 1].style.backgroundColor == "white") {
            number++;
        }
    } else if (i > (cols * rows) - cols && i < (cols * rows) - 1) {
        if (container.childNodes[i - 1].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i + 1].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i - cols].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i - cols - 1].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i - cols + 1].style.backgroundColor == "white") {
            number++;
        }
    } else { // Si on est quelque part d'autre 
        if (container.childNodes[i - cols].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i - cols - 1].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i - cols + 1].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i - 1].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i + 1].style.backgroundColor == "white") {
            number++;
        }
        console.log(i + cols);
        if (container.childNodes[i + cols].style.backgroundColor == "white") {
            number++;
        }
        if (container.childNodes[i + cols - 1].style.backgroundColor == "white") {
            number++;
        }
        console.log(i + cols);
        if (container.childNodes[i + cols + 1].style.backgroundColor == "white") {
            number++;
        }
    }
    return number;
}

function evolution(rows, cols) {
    console.log(container.childNodes.length);
    for (let i = 0; i < container.childNodes.length; i++) {
        console.log(i);
        let number = countColor(rows, cols, i);
        if (number == 0 || number == 1 || number >= 4) {
            container.childNodes[i].style.backgroundColor = "black";
        } else if (number == 3) {
            container.childNodes[i].style.backgroundColor = "white";
        }
    }
}

function evolutionAutomatique() {
    if (action == "lecture") {
        setTimeout(() => {
            evolution(rows, cols);
            evolutionAutomatique();
        }, 10)
    } else {

    }

}