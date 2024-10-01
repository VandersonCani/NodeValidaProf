const express = require("express");
const app = express();

app.use(express.json());

let livros = [
    {
        title: "Vendedor de Sonhos",
        author: "Augusto Cury",
        year: 2007,
        genre: "Desenv. Pessoal"
    },
    {
        title: "Um Homem de Sorte",
        author: "Nicholas Sparks",
        year: 2005,
        genre: "Romance"
    },
    {
        title: "Mais Esperto que oDiabo",
        author: "Napoleon Hill",
        year: 1957,
        genre: "Desenv. Pessoal"
    }
]

app.post("/adicionarLivro", (req, res) => {
    let title = req.body.title;
    let author = req.body.author;
    let year = req.body.year;
    let genre = req.body.genre;

    let newBook = {title, author, year, genre};
    livros.push(newBook);
    res.send("ok");
});

app.put("/atualizarLivro/:index", (req, res) => {
    const {index} = req.params;
    let title = req.body.title;
    let author = req.body.author;
    let year = req.body.year;
    let genre = req.body.genre;

    livros [index] = {title: title, author: author, year: year, genre: genre};
    return res.json(livros);
});

app.delete("/:index", (req, res) =>{
const { index } = req.params;
livros.splice(index,1);
return res.json({message: "Livro Deletado"})

})

app.get("/", (req, res) => {
    res.json(livros);
});







app.listen(8081, function () {
    console.log("Servidor rodando na porta 8081!")
});