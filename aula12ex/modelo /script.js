function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementByName('radsex')
        var idade = ano - Number(fano.value)
        var gender = '' 
        if (fsex[0].checked) {
            gender = 'Homem'
        } else if (fsex[1].checked) {
            gender = 'Mulher'
        }
        res.getElementsByClassName.textAlign = 'center'
        res.innerHTML = `Detectamos ${gender} com ${idade} anos.`

    }
}