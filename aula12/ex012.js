var agora = new Date()
var hora = agora.getHours()

console.log(`São ${hora} horas no seu local!`)

if (hora >= 06 && hora < 12){
    console.log('Bom dia!')
} else if (hora > 12 && hora <= 18) {
    console.log('Boa tarde!')
} else if (hora > 18 && hora <= 24){
    console.log('Boa noite!')
} else if (hora <6) {
        console.log('Boa madrugada')
} else {
    console.log('Confira seu horário e digite novamente!')
}