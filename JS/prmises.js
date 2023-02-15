function rand(min, max) {
    max += 1000
    min += 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
           resolve(msg.toUpperCase() + ' - Passei na Promise')
        }, tempo)
        
    })
}

esperaAi('Frase 1', rand(1, 3)).then(resposta => {
    console.log(resposta)
    return esperaAi('Frase 2', rand(1, 3)).then(resposta => {
        console.log(resposta)
        return esperaAi('Frase 3', rand(1, 3)).then(resposta => {
            console.log(resposta)
        })
    })
}).catch()


const promises = ['primeiro valor',
esperaAi('Promise 1',4000),
esperaAi('Promise 2',3500),
esperaAi('Promise 3',2500),
'Outro Valor'

]

Promise.racel(promises)
.then(function(valor){
    console.log(valor)
})
.catch(function(erro) {
    console.log(erro)
})


// Promise.all Promise.race Promise.reject
// promise.all todas as promesas resolvidas
//promise.race entrega a primeira promessa resolvida
//Promise.reject entrega uma promesas rejeitadas 