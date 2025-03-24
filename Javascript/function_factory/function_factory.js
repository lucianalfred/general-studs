const pessoa1 = {
    nome: 'Goth',
    idade: 17, 
    andar: function(){
        console.log('Pessoa andando');
    }
};

const pessoa2 = {
    nome: 'Gomes',
    idade: 17,
    andar: function(){
        console.log('Pessao andando');
    }
}

pessoa1.andar();
pessoa1.andar();


//factory function
function criarPessoa(nome, idade){
    return{
        nome: nome,
        idade: idade,
        andar: function(){
            console.log(`${nome} está andando`);
        }
    }
}

pessoa3 = criarPessoa("Fulano",13);
pessoa4 = criarPessoa("Fulana",14);

pessoa3.andar();
pessoa4.andar();


