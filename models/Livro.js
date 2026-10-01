export default class Livro {
    static proximoId = 1;

    constructor(titulo, autor, ano) {
        this.id = Livro.proximoId++;
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
}

