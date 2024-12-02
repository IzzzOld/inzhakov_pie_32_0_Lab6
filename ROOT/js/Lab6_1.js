function f(x, C) {
    let xStr = x.toString();
    let CStr = C.toString();
    let Y = CStr + xStr;
    return parseInt(Y, 10);
}

function calculateF() {
    let x = parseInt(document.getElementById('xInput').value);
    let C = parseInt(document.getElementById('CInput').value);

    if (isNaN(x) || isNaN(C)) {
        document.getElementById('resultF').innerText = "Введите корректные числа!";
        return;
    }

    let result = f(x, C);
    document.getElementById('resultF').innerText = `f(${x}, ${C}) = ${result}`;
}
