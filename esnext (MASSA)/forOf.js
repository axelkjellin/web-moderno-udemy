for (let letra of "coder") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promisse']

//indice [0,1,2]
for (let i in assuntosEcma) {
    console.log(i)
}

//valores ['Map', 'Set', 'Promisse']
for (let i of assuntosEcma) {
    console.log(i)
}

const assuntosMap = new Map([
    ['Map', {
        abordado: true
    }],
    ['Set', {
        abordado: true
    }],
    ['Promisse', {
        abordado: false
    }],
])

//pega tudo
for (let assunto of assuntosMap) {
    console.log(assunto)
}

//pega chave
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

//pega valor
for (let valor of assuntosMap.values()) {
    console.log(valor)
    console.log(valor.abordado)
}

//desestruturando
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}