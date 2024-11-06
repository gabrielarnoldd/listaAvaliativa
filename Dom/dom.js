// //att1
// let forma = document.getElementById('forma')
// forma.addEventListener('click', function () {
//     if (forma.style.backgroundColor == 'blue') {
//         forma.style.backgroundColor = 'green'
//     } else {
//         forma.style.backgroundColor = 'blue'
//     }


// })

// let forma2 = document.getElementById('forma2')
// forma2.addEventListener('click', function () {
//     if (forma2.style.backgroundColor == 'pink') {
//         forma2.style.backgroundColor = 'purple'
//     } else {
//         forma2.style.backgroundColor = 'pink'
//     }

// })
// let forma3 = document.getElementById('forma3')
// forma3.addEventListener('click', function () {
//     if (forma3.style.backgroundColor == 'black') {
//         forma3.style.backgroundColor = 'red'
//     } else {
//         forma3.style.backgroundColor = 'black'
//     }

// })
//att2
// let clicar = document.getElementById('clicar')
// let contador = document.getElementById('contador')
// let zerrar = document.getElementById('excluir')

// let contagem = 0

// clicar.addEventListener('click', function () {
//     contagem = contagem + 1
//     contador.innerText = contagem
// })
// zerrar.addEventListener('click', function () {
//     contagem = 0
//     contador.innerText = contagem
// })
// //att3
// let mensagem = document.getElementById('mensagem')
// let exibir = document.getElementById('exibir')
// let ocultar = document.getElementById('ocultar')

// mensagem.style.display = 'none'

// exibir.addEventListener('click', function () {
//     mensagem.style.display = 'inline'
// })

// ocultar.addEventListener('click', function () {
//     mensagem.style.display = 'none'
// })
// //att4
// let botao = document.getElementById("botao")
// let texto = document.getElementById("texto")

// botao.addEventListener('click', function () {
//     let textoNovo = prompt("Me fale uma frase nova: ")

//     texto.innerText = textoNovo
// })
// //att5
// let texto = document.getElementById('texto')

// document.addEventListener('keydown', function (event) {

//     texto.innerText = ` Você pressionou a tecla: ${event.key}`
// })
//ex6
// let votar = document.getElementById("votar")
// let imagemG = document.getElementById("generico")

// document.addEventListener("click", function () {
//     let pergunta = Number(prompt("Em quem  você deseja votar: \n(4)Ana \n(7)Maromba\n(14)Otto \n(66)Longoni"))
//     switch (pergunta) {
//         case 4:
//             let confirmar1 = prompt("Você deseja confirmar seu voto na Ana : (sim/nao)")
//             if (confirmar1 == 'sim') {
//                 alert("Você votou na Ana")
//                 imagemG.setAttribute('src', '/Imagens/ana.jfif')
//             }
//             else {
//                 alert("Reinicie e escolha outro candidato")
//             }
//             break
//         case 7:
//             let confirmar2 = prompt("Você deseja confirmar seu voto no Maromba: (sim/nao)")
//             if (confirmar2 == 'sim') {
//                 alert("Você votou no Maromba")
//                 imagemG.setAttribute('src', '/Imagens/Juwer.jfif')
//             }
//             else {
//                 alert("Reinicie e escolha outro candidato")
//             }
//             break
//         case 14:
//             let confirmar3 = prompt("Você deseja confirmar seu voto no  Otto: (sim/nao)")
//             if (confirmar3 == 'sim') {
//                 alert("Você votou no Otto")
//                 imagemG.setAttribute('src', '/Imagens/Otto.jfif')
//             }
//             else {
//                 alert("Reinicie e escolha outro candidato")
//             }
//             break
//         case 66:
//             let confirmar4 = prompt("Você deseja confirmar seu voto no Longoni: (sim/nao)")
//             if (confirmar4 == 'sim') {
//                 alert("Você votou no Longoni")
//                 imagemG.setAttribute('src', '/Imagens/Longoni.jfif')
//             }
//             else {
//                 alert("Reinicie e escolha outro candidato")
//             }
//             break


//     }


// })