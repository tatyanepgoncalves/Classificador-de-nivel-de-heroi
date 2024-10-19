let messageStart = "Bem vindo ao Classificador de Nível Herói!"
let XP = 12000;
let message;
let hero = "Hulk";


if (XP <= 1000) {
  message = "Ferro"
} else if (XP <= 2000) {
  message = "Bronze"
} else if (XP <= 5000) {
  message = "Prata"
} else if (XP <= 7000) {
  message = "Ouro"
} else if (XP <= 8000) {
  message = "Platina"
} else if (XP <= 9000) {
  message = "Ascendente"
} else if (XP <= 10000) {
  message = "Imortal"
} else if (XP >= 10001) {
  message = "Radiante"
}


console.log("O Herói de nome " + hero + " está no nível de " + message);