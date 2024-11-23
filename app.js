function contarVocales(palabra) {
    // Inicializamos un contador para almacenar la cantidad de vocales
    let contador = 0;

    // Recorremos cada letra de la palabra usando un bucle for
    for (let i = 0; i < palabra.length; i++) {
        // Extraemos la letra actual y la convertimos a minúscula para evitar problemas con mayúsculas
        let letra = palabra[i].toLowerCase();

        // Comparamos si la letra es una vocal (a, e, i, o, u)
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            // Si es una vocal, incrementamos el contador
            contador++;
        }
    }

    // Al finalizar el bucle, retornamos el total de vocales encontradas
    return contador;
}

// Probamos la función con diferentes palabras
console.log(contarVocales("hola")); // debe retornar 2 (o, a)
console.log(contarVocales("javascript")); // debe retornar 3 (a, a, i)
