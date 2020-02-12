"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = (function () {
    function Pessoa(nome, idade, signo) {
        this.nome = nome;
        this.idade = idade;
        this.signo = signo;
    }
    Pessoa.prototype.show = function () {
        console.log("Oi, meu nome \u00E9 " + this.nome + ", tenho " + this.idade + " anos e sou so signo de " + this.signo + ".");
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
//# sourceMappingURL=pessoa.js.map