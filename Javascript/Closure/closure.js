/*
*   Um closure e formado quando uma funcao lembra do escopo onde foi criado,
     mesmo depois que este escopo foi encerradp
*
*/

function count(){
    let counter = 0;

    return function(){
        counter++;
        console.log(counter);
    }
}

const counter1 = count();
counter1(); //vai imprimir 1
counter1(); //vai imprimir 2

const counter2 = count();
counter2(); //imprime 1, porque esta e uma nova instancia.