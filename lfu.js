let lista = [
    { frame: '1', tempoDeCarga: 12, quantidadeReferencias: 0, tempoDaUltimaReferencia: 20, BR: 1, BM: 1 },
    { frame: '2', tempoDeCarga: 10, quantidadeReferencias: 1, tempoDaUltimaReferencia: 12,BR: 0, BM: 0 },
    { frame: '3', tempoDeCarga: 11, quantidadeReferencias: 2, tempoDaUltimaReferencia: 21, BR: 1, BM: 0 },
];

//LFU
let quantidadeReferenciasAtual;
let indexUltimaRef;

for(let i = 0; i < lista.length; i++){
    if (lista[i].quantidadeReferencias < quantidadeReferenciasAtual || i == 0) {
        quantidadeReferenciasAtual = lista[i].quantidadeReferencias;
        indexUltimaRef = i + 1;
    }
}

console.log("Id: " + indexUltimaRef);