// Ao criar uma Promise, espera-se como parâmetro a ser passado uma função, e esse função espera como retorno dois parâmetros.Eles podem ser nomeados da maneira que quiser, porém irão representar obrigatoriamente a resolução da Promise a Falha desse Promise.
// Portanto se nós chamarmos a função resolve() teremos como retorno a função resoçvida, reject() a função rejeitada e se não chamarmos nada, a função ficará pending.

// Exemplo:
// new Promise((resolve, rejected) => {
//     resolve();
//     rejected();
//     // nothing;
// })

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YOUR FAKE DATA HERE');
            }
            else {
                reject('REQUEST ERROR');
            }
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log('DONE WITH REQUEST!');
        console.log('DATA IS:', data);
    })
    .catch((err) => {
        console.log('OH NO', err);
    })

// Portanto o conceito básico para se criar um Promise é utilizar uma primeira função que irá retornar uma Promise, e nele conterá dois parâmetros, um deles para a solução e outro para a rejeição.

// ------------------------------------------------------------------------------------------------
// Voltando ao Exemplo de colocar transição de cores:


// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// });

// -----------------------------------------------------------------------------------------------------

// Reescrevendo o código utilizando PROMISES.

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('violet', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
