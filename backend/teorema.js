function calcularIntegral() {
    const funcion = document.getElementById("funcion").value;
    const limiteInferior = parseFloat(document.getElementById("limite_inf").value);
    const limiteSuperior = parseFloat(document.getElementById("limite_sup").value);

    // Validar entradas
    if (isNaN(limiteInferior) || isNaN(limiteSuperior) || funcion.trim() === "") {
        alert("Por favor, ingrese una función válida y límites numéricos.");
        return;
    }

    try {
        // Parsear la función y calcular la integral definida
        const func = new Function("x", `
            return ${funcion
                .replace(/sin/g, 'Math.sin')
                .replace(/cos/g, 'Math.cos')
                .replace(/tan/g, 'Math.tan')
                .replace(/sqrt/g, 'Math.sqrt')}`);
        
        // Calcular la integral numérica utilizando el teorema fundamental del cálculo
        const integralResult = calcularTeorema(func, limiteInferior, limiteSuperior).toFixed(2);

        // Mostrar el resultado
        const resultadoElemento = document.getElementById("resultado");
        resultadoElemento.textContent = `La integral definida de ${funcion} en [${limiteInferior}, ${limiteSuperior}] es ${integralResult}`;
    } catch (error) {
        alert("Error al calcular la integral definida. Asegúrese de que la función sea válida.");
    }
}

function calcularTeorema(func, a, b, n = 1000) {
    const h = (b - a) / n;
    let sum = 0;

    // Aplicar el teorema fundamental del cálculo
    for (let i = 0; i < n; i++) {
        const x = a + i * h;
        sum += func(x);
    }

    return h * sum;
}
function limpiarCalculadora() {
    document.getElementById('funcion').value = '';
    document.getElementById('limite_inf').value = '';
    document.getElementById('limite_sup').value = '';
    document.getElementById('resultado').innerText = '';
}