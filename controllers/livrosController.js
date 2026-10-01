import Livro from "../models/Livro.js";

const livros = [];

class LivrosController {

    listar(req, res) {
        res.render("livros", {
            livros
        });
    }

    formularioCadastrar(req, res) {
        res.render("cadastrar");
    }

    cadastrar(req, res) {
        const { titulo, autor, ano } = req.body;

        const livro = new Livro(titulo, autor, ano);

        livros.push(livro);

        res.redirect("/livros");
    }

    formularioEditar(req, res) {
        const id = Number(req.params.id);

        const livro = livros.find(livro => livro.id === id);

        if (!livro) {
            return res.status(404).send("Livro não encontrado");
        }

        res.render("editar", {
            livro
        });
    }

    editar(req, res) {
        const id = Number(req.params.id);

        const livro = livros.find(livro => livro.id === id);

        if (!livro) {
            return res.status(404).send("Livro não encontrado");
        }

        livro.titulo = req.body.titulo;
        livro.autor = req.body.autor;
        livro.ano = req.body.ano;

        res.redirect("/livros");
    }

    excluir(req, res) {
        const id = Number(req.params.id);

        const indice = livros.findIndex(livro => livro.id === id);

        if (indice === -1) {
            return res.status(404).send("Livro não encontrado");
        }

        livros.splice(indice, 1);

        res.redirect("/livros");
    }
}

export default new LivrosController();
