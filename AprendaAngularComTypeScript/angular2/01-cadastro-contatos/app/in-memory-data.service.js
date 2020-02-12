"use strict";
class InMemoryDataService {
    createDb() {
        let contatos = [
            { id: 1, nome: 'Ana Caroline', idade: 28, signo: 'Aquário' },
            { id: 2, nome: 'Thalita Puta', idade: 24, signo: 'Libra' },
            { id: 3, nome: 'Gheisla Peitos', idade: 27, signo: 'Leão' },
            { id: 4, nome: 'Dani Puta', idade: 23, signo: 'Libra' },
            { id: 5, nome: 'Luanny Baile Funk', idade: 23, signo: 'Libra' }
        ];
        return {
            'contatos': contatos
        };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map