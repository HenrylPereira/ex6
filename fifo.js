lista = [
    { frame: 1, tempoCarga: 12, quantRef: 10, tempoUltimaRef: 20, br: 1, bm: 1 },
    { frame: 2, tempoCarga: 10, quantRef: 1, tempoUltimaRef: 12, br: 0, bm: 0 },
    { frame: 3, tempoCarga: 11, quantRef: 2, tempoUltimaRef: 21, br: 1, bm: 0 },
    { frame: 55, tempoCarga: 11, quantRef: 2, tempoUltimaRef: 21, br: 1, bm: 0 },
    { frame: 6760, tempoCarga: 2, quantRef: 2, tempoUltimaRef: 21, br: 1, bm: 0 },
]

//FIFO
let tempoCargaAtual;
let indexMaior;

for(let i = 0; i < lista.length; i++){
    if (lista[i].tempoCarga < tempoCargaAtual || i == 0) {
        tempoCargaAtual = lista[i].tempoCarga;
        indexMaior = i;
    }
}

console.log("Id: " + indexMaior);
