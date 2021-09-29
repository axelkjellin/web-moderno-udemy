const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa sai, ultimo elemento sai
console.log(pilotos)

pilotos.push('Verstappen')// adiciona na ultima posição
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice adiciona ou remove

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)//massa sai dnovo
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)// novo array 
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)// o indici 4 ele nao pega como se fosse >
console.log(algunsPilotos2)