function calculateIntegral() {
    const functionInput = document.getElementById("function").value;
    const lowerLimit = parseFloat(document.getElementById("lowerLimit").value);
    const upperLimit = parseFloat(document.getElementById("upperLimit").value);

    // Validar entradas
    if (isNaN(lowerLimit) || isNaN(upperLimit) || functionInput.trim() === "") {
        alert("Por favor, ingrese una función válida y límites numéricos.");
        return;
    }

    try {
        // Parsear la función y calcular la integral definida
        const func = new Function("x", `
            return ${functionInput
                .replace(/sin/g, 'Math.sin')
                .replace(/cos/g, 'Math.cos')
                .replace(/tan/g, 'Math.tan')
                .replace(/sqrt/g, 'Math.sqrt')}`);
        const integralResult = integral(func, lowerLimit, upperLimit).toFixed(2);

        // Mostrar el resultado
        const resultElement = document.getElementById("result");
        resultElement.textContent = `La integral definida de ${functionInput} en [${lowerLimit}, ${upperLimit}] es ${integralResult}`;
    } catch (error) {
        alert("Error al calcular la integral definida. Asegúrese de que la función sea válida.");
    }
}

function integral(func, a, b, n = 1000) {
    const h = (b - a) / n;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        const x = a + i * h;
        sum += func(x);
    }
    return h * (0.5 * func(a) + 0.5 * func(b) + sum - func(a));
}
function limpiarCalculadora() {
    document.getElementById('function').value = '';
    document.getElementById('lowerLimit').value = '';
    document.getElementById('upperLimit').value = '';
    document.getElementById('result').innerText = '';
}