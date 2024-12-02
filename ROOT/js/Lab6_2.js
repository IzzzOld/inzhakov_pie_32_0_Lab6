 function inputMatrix() {
    let matrix = [];
    let line = parseInt(document.getElementById('lineInput').value);
    let column = parseInt(document.getElementById('columnInput').value);

    if (isNaN(line) || isNaN(column) || line <= 0 || column <= 0) {
        document.getElementById('matrixResult').innerText = "Введите корректные числа!";
        return;
    }

    for (let i = 0; i < line; i++) {
        let lines = [];
        for (let j = 0; j < column; j++) {
            let value = parseInt(prompt(`Введите элемент [${i}][${j}]:`));
            if (isNaN(value)) {
                document.getElementById('matrixResult').innerText = "Все элементы матрицы должны быть числами!";
                return;
            }
            lines.push(value);
        }
        matrix.push(lines);
    }
    return matrix;
}

function processMatrix(matrix) {
    let result = [];
    for (let i = 1; i < matrix.length; i += 2) {
        result.push(matrix[i]);
    }
    return result;
}

function printMatrix(matrix) {
    let result = '';
    for (let i = 0; i < matrix.length; i++) {
        let lines = '';
        for (let j = 0; j < matrix[i].length; j++) {
            lines += matrix[i][j] + ' ';
        }
        result += lines + '\n';
    }
    document.getElementById('matrixResult').innerText = result;
}

function mainMatrix() {
    let matrix = inputMatrix();
    let processedMatrix = processMatrix(matrix);
    printMatrix(processedMatrix);
}


