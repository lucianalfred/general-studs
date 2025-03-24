//constructor function
function Pessoa(nome, idade){
    this.nome = nome,
    this.idade = idade,
    this.andar =  function(){
        console.log(`${this.nome} está andando`)
    };
}

const pessoa1 = new Pessoa('Goth',17);
const pessoa2 = new Pessoa('Gomes', 18);

pessoa1.andar();
pessoa2.andar();
