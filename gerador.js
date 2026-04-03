function verficaDuplicidadeDeValorNaLinha(tabuleiro, linha, coluna, valor) {
    const indexLinha = tabuleiro[linha].findIndex((cell, index) => cell == valor && coluna != index);
    if (indexLinha > -1)
        return true;
    return false
}

function verificaDuplicidadeDeValorNaColuna(tabuleiro, linha, coluna, valor) {
    for (let i = 0; i < 9; i++)
        if (tabuleiro[i][coluna] == valor && i != linha)
            return true;
    return false;
}

function verificaDuplicidadeDeValorNoQuadrante(tabuleiro, linha, coluna, valor) {
    const iQuadrante = (Math.floor(linha / 3) * 3);
    const jQuadrante = (Math.floor(coluna / 3) * 3);

    for (let i = iQuadrante; i < iQuadrante + 3; i++) {
        for (let j = jQuadrante; j < jQuadrante + 3; j++) {
            if (tabuleiro[i][j] == valor && i != linha)
                return true;
        }
    }
    return false;
}

function definePossibilidades(tabuleiro, linha, coluna) {
    const opcoes = []
    for (var valor = 1; valor <= 9; valor++) {
        if (verficaDuplicidadeDeValorNaLinha(tabuleiro, linha, coluna, valor) ||
            verificaDuplicidadeDeValorNaColuna(tabuleiro, linha, coluna, valor) ||
            verificaDuplicidadeDeValorNoQuadrante(tabuleiro, linha, coluna, valor))
            continue;

        //passou...
        opcoes.push(valor);
    }
    return opcoes;
}


// function defineUnicaOpcao() {
//     if (mostrarUnicaOpcao) {
//         const marcados = document.querySelectorAll('.marcacao')
//         if (marcados) {
//             for (var i = 0; i < marcados.length; i++) {
//                 const item = marcados[i];
//                 const opcoes = [...item.children].filter(x => x.innerText != '');

//                 if (opcoes.length == 1) { //so tem essa mesma
//                     opcoes[0].classList.add('unicaOpcao')
//                     continue;
//                 }

//                 const row = item.dataset.row;
//                 const column = item.dataset.column;

//                 for (var j = 0; j < opcoes.length; j++) {
//                     const opcao = opcoes[j];

//                     const minhaLinha = [...document.querySelectorAll(`.marcacao[data-row="${row}"]`)];
//                     const opcaoIgualNaMinhaLinha = minhaLinha.find(x =>
//                         x.dataset.column != column && [...x.children].find(x => x.innerText == opcao.innerText)
//                     )
//                     if (!opcaoIgualNaMinhaLinha) { //sou o unico da linha
//                         opcao.classList.add('unicaOpcao')
//                         continue;
//                     }

//                     const minhaColuna = [...document.querySelectorAll(`.marcacao[data-column="${column}"]`)];
//                     const opcaoIgualNaMinhaColuna = minhaColuna.find(x =>
//                         x.dataset.row != row && [...x.children].find(x => x.innerText == opcao.innerText)
//                     )
//                     if (!opcaoIgualNaMinhaColuna) { //sou o unico da coluna
//                         opcao.classList.add('unicaOpcao')
//                         continue;
//                     }

//                     const iQuadrante = (Math.floor(row / 3) * 3);
//                     const jQuadrante = (Math.floor(column / 3) * 3);
//                     let souUnicaOpcaoNoQuadrante = true;
//                     for (let i = iQuadrante; i < iQuadrante + 3; i++) {
//                         for (let j = jQuadrante; j < jQuadrante + 3; j++) {
//                             if (i == row && j == column) //sou eu mesmo kkk
//                                 continue;

//                             const cell = document.querySelector(`.marcacao[data-row="${i}"][data-column="${j}"]`)
//                             if (cell) {
//                                 const opcaoIgualNoQuadrante = [...cell.children].find(x => x.innerText == opcao.innerText)
//                                 if (opcaoIgualNoQuadrante) {
//                                     souUnicaOpcaoNoQuadrante = false;
//                                     break;
//                                 }
//                             }
//                         }
//                     }
//                     if (souUnicaOpcaoNoQuadrante)
//                         opcao.classList.add('unicaOpcao')

//                 }

//             }
//         }
//     }
// }
