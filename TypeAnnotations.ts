// Tipos de dados em Typescript

// Variaveis :

let nome : string = "Caique";
console.log(nome);

// Arreys :

let listaNomes : string[] = ["Caique", "Iasmim", "Rafael"];
console.log(listaNomes);

// objetos :

let carro : {
    nome : string;
    ano : number;
    valor : number

};

 carro = {nome:"palio", ano:2024, valor:80.000 };
 console.log(carro);

 //funções :

 function somarElementos( a :number, b : number){
    return a + b
 };
 console.log(somarElementos(2,5));
