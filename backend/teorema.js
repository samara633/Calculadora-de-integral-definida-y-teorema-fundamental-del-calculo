function calcularIntegral() {
    const funcion = document.getElementById('funcion').value;
    const x0 = parseFloat(document.getElementById('limite_inf').value);
    const x1 = parseFloat(document.getElementById('limite_sup').value);

    try {
        // Compilar y simplificar la función ingresada
        const compiledFunction = math.compile(math.simplify(funcion).toString());

        // Evaluar la función compilada en los puntos 'x0' y 'x1'
        const resultAtX0 = compiledFunction.evaluate({ x: x0 });
        const resultAtX1 = compiledFunction.evaluate({ x: x1 });

        // Calcular la integral numérica
        const result = math.simpson(compiledFunction, x0, x1);

        // Mostrar el resultado en un formato más legible (opcional)
        const formattedResult = math.format(result, { precision: 2 });
        document.getElementById('resultado').innerText = `El resultado es ${formattedResult} (aproximadamente)`;
    } catch (error) {
        // Loguear el mensaje de error en la consola del navegador
        console.log(error);
        // Mostrar el mensaje de error con alert
        alert(`Error: ${error}`);
    }
}
