
import { getTodosFavoritos, insereFavorito, deletaFavoritosPorId } from "../service/favoritosService.js";

export const getFavoritos = (req, res) => {
    try {
        const livros = getTodosFavoritos()
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const postFavorito = (req, res) => {
    try {
        const id = req.params.id
        insereFavorito(id)
        req.status(201)
        res.send("Livro adicionado aos favoritos")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};


export const deletaFavorito = (req, res) => {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            deletaFavoritosPorId(id)
            res.send("Livro removido dos favoritos")
        }
        else {
            res.status(422)
            res.send("Id inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}