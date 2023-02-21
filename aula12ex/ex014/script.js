function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'foto-manhã.png'
        document.body.style.background = '#f49e12'
    } else if (hora >= 12 && hora <18) {
        //Boa tarde!
        img.src = 'foto-tarde.png'
        
    } else {
        //Boa noite
        img.src = 'foto-noite.png'
        document.body.style.background = '#191970'
    }
}

