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