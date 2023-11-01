function calculateIntegral() {
    const functionInput = document.getElementById("function").value;
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);

    // Validar entradas
    if (isNaN(a) || isNaN(b) || functionInput.trim() === "") {
        alert("Por favor, ingrese una función válida y límites numéricos.");
        return;
    }

    try {
        // Parsear la función y calcular la integral definida
        const f = new Function("x", `return ${functionInput}`);
        const integralResult = integral(f, a, b).toFixed(2);

        // Mostrar el resultado
        const resultElement = document.getElementById("result");
        resultElement.textContent = `La integral definida de ${functionInput} en [${a}, ${b}] es ${integralResult}`;
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
