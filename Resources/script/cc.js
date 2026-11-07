import {criarEstudante} from "./aa.js";

let novoEstudante = new criarEstudante();
novoEstudante.criarEstudante("kaka", 18, "kaka@gmail.com", "12345678");

console.log(novoEstudante);

class EstudanteMethods {
    // Atributos
usuario = null
    create(criarEstudante = {}) {
    this.usuario = novoEstudante
    }
    update() {

    }
    delete() {

    }
    read() {
 return this.usuario
    }


}

let save = new EstudanteMethods()
save.create(novoEstudante)
console.log(save.read())