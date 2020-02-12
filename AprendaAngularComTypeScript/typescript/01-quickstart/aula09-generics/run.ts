import { Dao } from './dao';
import { Animal } from './../aula07-classes/animal';
import { Cavalo } from './../aula07-classes/cavalo';



let dao = new Dao<Animal>();

let animal = new Animal('Bingo');
let cavalo = new Cavalo('Vinhado');

dao.insert(cavalo);