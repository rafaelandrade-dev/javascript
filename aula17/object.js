let amigo = {
nome: 'José', 
sexo:'M', 
peso: 85.4,
engordar(p){
    console.log('Engordou')
    this.peso += p
}
}
amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)