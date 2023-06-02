function ordenarNumeros(listaOriginal, cantidad) {
    let listaOrganizadaMenm = [];
    let listaOrganizadaMaym = [];
    let listaIndice = [];
    for (let x = 0; x < cantidad; x++) {
        let y = x;
        for (let o = 0; o < cantidad; o++) {
            let oNrepite = true;
            let yNrepite = true;
            if (x > 0) {
                for (let z = 0; z < x; z++) {
                    if (listaIndice[z] === o) {
                        oNrepite = false;
                    } else if (listaIndice[z] === y) {
                        yNrepite = false;
                    }
                }
            }
            if (!yNrepite && oNrepite) {
                y = o;
            }
            if (yNrepite && oNrepite) {
                if (listaOriginal[y] >= listaOriginal[o]) {
                    y = o;
                }
            }
        }
        listaIndice.push(y);
        listaOrganizadaMenm.push(listaOriginal[y]);
    }
    for (let p = cantidad-1; p >= 0; p--) {
        listaOrganizadaMaym.push(listaOrganizadaMenm[p]);
    }
    return [listaOrganizadaMenm, listaOrganizadaMaym];
}

function areaCircunferencia(radio){
    const pi = 3.14159265;
    let area = pi * radio ** 2;
    return area;
}

function ladosTriangulo(lados) {
    if (lados[0] !== lados[1] && lados[0] !== lados[2] && lados[1] !== lados[2]) {
        return "Es un triángulo escaleno";
    } else if (lados[0] === lados[1] && lados[0] === lados[2] && lados[1] === lados[2]) {
        return "Es un triángulo equilátero";
    } else {
        return "Es un triángulo isósceles";
    }
}

function numeroAmigos(n1, n2) {
    let sumas = [0, 0];
    for (let i = 1; i < n1; i++) {
        if (n1 % i === 0) {
            sumas[0] += i;
        }
    }
    for (let o = 1; o < n2; o++) {
        if (n2 % o === 0) {
            sumas[1] += o;
        }
    }
    if (sumas[0] === n2 && sumas[1] === n1) {
        return "Son numeros amigos";
    } else {
        return "No son numeros amigos";
    }
}

function calcularCompra(valor, cantidad) {
    let total = valor * cantidad;
    let iva = 0;
    let descuento = 0;
    const valorSinIvaDes = cantidad * valor;
    if (total > 500000) {
    if (total > 1000000) {
        descuento = total * 0.10;
        total -= descuento;
    }
    } else {
        iva = valorSinIvaDes * 0.19;
        total += iva;
    }
    return [valorSinIvaDes, iva, descuento, total];
}

function calcularNotas(notas) {
    let notasPonderadas = [];
    let suma = 0;
    if (notas[3] === 5) {
        for (let i = 0; i < 3; i++) {
            if (notas[i] + 1 <= 5) {
                notas[i] += 1;
            } else if (notas[i] > 4 && notas[i] < 5) {
                notas[i] = 5.0;
            }
        }
    }
    for (let i = 1; i <= 4; i++) {
        notasPonderadas.push(notas[i - 1] * (i * 0.10));
    }
    for (let i = 0; i < 4; i++) {
        suma += notasPonderadas[i];
    }
    return suma;
}

function menu() {
    contadorM = [0, 0, 0, 0, 0, 0];
    let op;
    do{
        // console.log(
        //     "Opcion Menu:\n"+
        //     "1. Organizar lista de numeros\n"+
        //     "2. Calcular area de una circunferencia\n"+
        //     "3. Tipo de triangulo\n"+
        //     "4. Numeros amigos\n"+
        //     "5. Calcular Compra\n"+
        //     "6. Calcular nota\n"+
        //     "0. Salir\n"
        // )
        op = prompt(
            "Opcion Menu:\n"+
            "1. Organizar lista de numeros\n"+
            "2. Calcular area de una circunferencia\n"+
            "3. Tipo de triangulo\n"+
            "4. Numeros amigos\n"+
            "5. Calcular Compra\n"+
            "6. Calcular nota\n"+
            "0. Salir\n"+
            "Digite una opcion: ");
        switch (op) {

            case "1":
                contadorM[0]++;
                let listaOriginal = [];
                let cantidad = 0;
                let numero;
                // for (let p = 0; p < 3; p++) {
                //     listaOriginal.push(parseFloat(prompt("Digite un número: ")));
                // }
                // cantidad = 3;
                do {
                    numero = prompt("Digite un número o (N para salir): ");

                    if (
                        (numero >= 'a' && numero <= 'z') && (numero != "n") || (numero >= 'A' && numero <= 'Z') && (numero != "N")||
                        numero === '°' || numero === '¬' || numero === '!' || numero === '"' || numero === '#' || numero === '$' ||
                        numero === '/' || numero === '(' || numero === ')' || numero === '=' || numero === '?' || numero === '¡' ||
                        numero === '*' || numero === '+' || numero === '-' || numero === ',' || numero === ';' || numero === ':' ||
                        numero === '.' || numero === '_' || numero === 'ñ' || numero === 'Ñ' || numero === '[' || numero === ']' ||
                        numero === '{' || numero === '}' || numero === '|' || numero === '<' || numero === '>' || numero === '\\' ||
                        numero === '@' || numero === '\'' || numero === '^' || numero === '`' || numero === '´' || numero === '%' ||
                        numero === '&') {
                        console.log('Ingrese solo numeros...\n');

                    } else if (numero != "n" && numero != "N") {
                        listaOriginal.push(parseFloat(numero));
                        cantidad++;
                    }
                } while (numero != 'n' && numero != 'N');

                let listas = ordenarNumeros(listaOriginal, cantidad);
                console.log(`\nLista original: ${listaOriginal}`);
                console.log(`Lista organizada de menor a mayor: ${listas[0]}`);
                console.log(`Lista organizada de mayor a menor: ${listas[1]}`);
                break;

            case "2":
                contadorM[1]++;
                let radio = parseFloat(prompt("Ingrese el radio de la circunferencia: "));
                area = areaCircunferencia(radio);
                console.log(`El area de la circunferencia con radio ${radio} es: ${area}`);
                break;

            case "3":
                contadorM[2]++;
                let lados = [];
                console.log("Ingrese los 3 lados del triángulo.\n");
                for (let i = 1; i <= 3; i++) {
                    let lado = parseFloat(prompt(`Ingrese el lado ${i} del triángulo:`));
                    lados.push(lado);
                }
                tipoTriangulo = ladosTriangulo(lados);
                console.log(tipoTriangulo);
                break;

            case "4":
                contadorM[3]++;
                const n1 = parseInt(prompt("Ingrese un numero: "));
                const n2 = parseInt(prompt("Ingrese otro numero: "));
                numeroA = numeroAmigos(n1, n2);
                console.log(numeroA);
                break;

            case "5":
                contadorM[4]++;
                let valor = parseInt(prompt("Ingresa el valor del producto: "));
                let cantidadP = parseInt(prompt("Ingresa la cantidad del producto: "));
                resultado = calcularCompra(valor, cantidadP);
                console.log(`Valor sin iva y descuento: ${resultado[0]}`);
                console.log(`IVA: ${resultado[1]}`);
                console.log(`Descuento: ${resultado[2]}`);
                console.log(`Valor con iva y descuento: ${resultado[3]}`);
                break;

            case "6":
                contadorM[5]++;
                let notas = [];
                let nota = 0;
                for (let i = 0; i < 4; i++){
                    do {
                        nota = parseFloat(prompt(`Ingrese la nota ${i + 1}: `));
                        if (nota < 0 || nota > 5) {
                            console.log("La nota mínima es 0 y la nota máxima es 5...\n");
                        }
                        } while (nota < 0 || nota > 5);
                        notas.push(nota);
                    }
                sumaN = calcularNotas(notas);
                console.log(`\nLa nota del estudiante es: ${sumaN}`);
                if (sumaN > 3.5) {
                    console.log("El estudiante aprobó la materia");
                } else {
                    console.log("El estudiante reprobó la materia");
                }
                break;

            case "0":
                console.log("\nFinalizo el programa...")
                break;

            default:
                console.log("Escriba una opcion correcta...");
                break;
        }
    }while(op != "0");
    return contadorM;
}
//const prompt = require('prompt-sync')();
repeticionesMenu = menu();

for(let i = 0; i < 6; i++){
    console.log(`La opcion ${i+1} se repitio ${repeticionesMenu[i]}`)
}