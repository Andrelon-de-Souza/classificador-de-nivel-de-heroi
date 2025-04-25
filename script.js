let nomeHeroi = "Batman"
let quantidadeXp = numeroAleatorio(1, 15000) 
let nivelDoHeroi = " "

if(quantidadeXp > 0 && quantidadeXp <= 1000) {
    nivelDoHeroi = "Ferro"
} else if(quantidadeXp >= 1001 && quantidadeXp <= 2000) {
    nivelDoHeroi = "Bronze"
} else if(quantidadeXp >= 2001 && quantidadeXp <= 5000) {
    nivelDoHeroi = "Prata"
} else if(quantidadeXp >= 5001 && quantidadeXp <= 7000) {
    nivelDoHeroi = "Ouro"
} else if(quantidadeXp >= 7001 && quantidadeXp <= 8000) {
    nivelDoHeroi = "Platina"
} else if(quantidadeXp >= 8001 && quantidadeXp <= 9000) {
    nivelDoHeroi = "Ascendente"
} else if(quantidadeXp >= 9001 && quantidadeXp <= 10000) {
    nivelDoHeroi = "Imortal"
} else if(quantidadeXp >= 10001) {
    nivelDoHeroi = "Radiante"
}

    console.log(`O herói com o nome ${nomeHeroi} está no nível ${nivelDoHeroi}, com ${quantidadeXp} de XP!`);


function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}