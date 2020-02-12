import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContatoService } from './contato.service';
import { Contato } from './contato.model';

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'
})
export class ContatoDetalheComponent implements OnInit {

    contato: Contato;
    private novoRegistro: boolean = true;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        console.log('onInit');
        this.contato = new Contato(0, '', 0, '');

        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];

            if(id){

                this.novoRegistro = false;

                this.contatoService.getContato(id)
                .then((contato: Contato) => {
                    this.contato = contato;
                });
            }

            
        });        
    }

    getFormGroupClass(valid: boolean, pristine: boolean): {} {
        return{
            'form-group': true,
            'has-danger': !valid && !pristine,
            'has-success': valid && !pristine
        };
    }

    getFormControlClass(valid: boolean, pristine: boolean): {} {
        return{
            'form-control': true,
            'form-control-danger': !valid && !pristine,
            'form-control-success': valid && !pristine
        };
    }

    onSubmit(): void{
        let promise;

        if (this.novoRegistro){
            console.log("Cadastrar novo contato");
            promise = this.contatoService.create(this.contato);
        }else{
            console.log("Alterar um contato existente");
            promise = this.contatoService.update(this.contato);
        }

        promise.then(contato => this.location.back());
    }
}