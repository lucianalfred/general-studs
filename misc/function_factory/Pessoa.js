class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    andar(){
        console.log(`${this.nome} está andando`);
    }
}

pessoa  = new Pessoa("Sincrano",16);
pessoa.andar();