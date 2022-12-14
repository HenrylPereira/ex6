lista = [
    { frame: 1, tempoCarga: 12, quantRef: 10, tempoUltimaRef: 20, br: 1, bm: 1 },
    { frame: 2, tempoCarga: 10, quantRef: 1, tempoUltimaRef: 12, br: 0, bm: 0 },
    { frame: 3, tempoCarga: 11, quantRef: 2, tempoUltimaRef: 21, br: 1, bm: 0 },
    { frame: 55, tempoCarga: 11, quantRef: 2, tempoUltimaRef: 21, br: 1, bm: 0 },
    { frame: 6760, tempoCarga: 2, quantRef: 2, tempoUltimaRef: 21, br: 1, bm: 0 },
]

//LRU
let tempoUltimaRefAtual;
let indexUltimaRef;

for(let i = 0; i < lista.length; i++){
    if (lista[i].tempoUltimaRef < tempoUltimaRefAtual || i == 0) {
        tempoUltimaRefAtual = lista[i].tempoUltimaRef;
        indexUltimaRef = i;
    }
}

console.log("Id: " + indexUltimaRef);
