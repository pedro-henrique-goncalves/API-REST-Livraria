import autores from "../models/Autor.js";

class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        })
    }

    static listarAutoresPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - ID do autor não localizado.` })
            } else {
                res.status(200).send(autores);
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if (!err) {
                res.status(201).send(autor.toJSON());
            } else {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar autor.` })
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Não foi possível atualizar, ID não localizado.`});
            } else {
                res.status(200).send({message: 'Autor atualizado com sucesso!'});
            }
        })
    }

    static deletarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndRemove(id, (err) => {
            if(err) {
                res.status(500).send({ message: `${err.message} - Não foi possível deletar o autor, ID não localizado.`})
            } else {
                res.status(200).send({message: 'Autor removido com sucesso!'})
            }
        })
    }
}

export default AutorController;