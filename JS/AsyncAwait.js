function rand(min, max) {
    max += 1000
    min += 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('CAÍ NO ERRO')
                return
            }

           resolve(msg.toUpperCase() + ' - Passei na Promise')
           return
        }, tempo)
        
    })
}

// esperaAi('Fase 1', rand())
// .then(valor => {
//     console.log(valor)
//     return esperaAi('Fase 2 ', rand())
// })
// .then(fase => {
//     console.log(fase)
//     return esperaAi('Fase 3', rand())
// })
// .then(fase => {
//     console.log(fase)
// })
// .catch(e => console.log(e))

async function executa() {
    try {
    const fase1 = await esperaAi('Fase 1', rand())
    console.log(fase1)

    const fase2 = await esperaAi(5, rand())
    console.log(fase2)

    const fase3 = await esperaAi('Fase 3', rand())
    console.log(fase3)

} catch(e) {
    console.log(e)
}
}
executa()

/**
 * async await tem 3 estados 
 * 
 * pending -> pendente
 * fullfield -> resolvida
 * reject -> rejeitada
 * 
 */