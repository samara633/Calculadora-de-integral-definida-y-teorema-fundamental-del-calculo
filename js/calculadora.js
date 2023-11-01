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
        const f = new Function("x", `return ${functionInput}`);
        const integralResult = integral(f, lowerLimit, upperLimit).toFixed(2);

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
    return h * sum;
}
