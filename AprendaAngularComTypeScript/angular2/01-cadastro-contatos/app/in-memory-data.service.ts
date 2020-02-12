import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Contato } from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService {

    createDb(): {} {

        let contatos: Contato[] = [
            {id: 1, nome: 'Ana Caroline', idade: 28, signo: 'Aquário'},
            {id: 2, nome: 'Thalita Puta', idade: 24, signo: 'Libra'},
            {id: 3, nome: 'Gheisla Peitos', idade: 27, signo: 'Leão'},
            {id: 4, nome: 'Dani Puta', idade: 23, signo: 'Libra'},
            {id: 5, nome: 'Luanny Baile Funk', idade: 23, signo: 'Libra'}
        ];

        return {
            'contatos': contatos
        }; 
    }
}