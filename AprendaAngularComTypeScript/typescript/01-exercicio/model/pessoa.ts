export class Pessoa{

    nome: string;
    idade: number;
    signo: string;

    constructor(nome:string, idade:number, signo:string){
        this.nome = nome;
        this.idade = idade;
        this.signo = signo;
    }

    show(){
        console.log(`Oi, meu nome é ${this.nome}, tenho ${this.idade} anos e sou so signo de ${this.signo}.`);
    }
}