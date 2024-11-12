class heroi{
    constructor(tipo, nome, idade, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }

    atacar(){
        console.log(`O ${this.tipo} ${this.nome} com seus ${this.idade} anos, atacou o inimigo ${this.ataque}!!!`)
    }
}

let mago = new heroi ("Mago", "VitorZ", "65", "usando magia")
let guerreiro = new heroi ("Guerreiro", "Abellardy", "41", "usando espada")
let monge = new heroi ("Monge", "Linconl", "80", "usando artes marciais")
let ninja = new heroi ("Ninja", "LeozerasGamer", "25", "usando shuriken")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()