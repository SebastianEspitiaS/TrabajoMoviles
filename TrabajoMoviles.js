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
    return [listaOriginal, listaOrganizadaMenm, listaOrganizadaMaym];
}

function areaCircunferencia(radio){
    const pi = 3.14159265;
    let area = pi * radio ** 2;
    return area
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
    return [valorSinIvaDes, iva, descuento, total]
}