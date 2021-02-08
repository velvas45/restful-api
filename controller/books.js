let book = require('./../data/books.json');

exports.getAPI = (req, res) => {
    res.status(200).json(book);
}

exports.getAPIById = (req, res) => {
    const searchBook = book.find(data => data.id_book === +req.params.id);
    if (searchBook !== undefined) {
        res.status(200).json(searchBook);
    } else {
        res.status(200).json({
            error: true,
            message: `books with id ${req.params.id} not found!`
        })
    }
};

exports.postAPI = (req, res) => {
    const { isbn,judul,sinopsi, penulis,genre } = req.body;

    const id = parseInt(book[book.length - 1].id_book) + 1;
    const buku = {
        id,
        isbn,judul,sinopsi, penulis,genre
    };
    book.push(buku);
    res.status(201).json({
        error: false,
        message: `book with id ${id} successfully created!`
    });
};

exports.putAPI = (req, res) => {
    const id = req.params.id;
    book.filter(data => {
        if (data.id_book === parseInt(id)) {
            data.isbn = req.body.isbn;
            data.judul = req.body.judul;
            data.sinopsi = req.body.sinopsi;
            data.penulis = req.body.penulis;
            data.genre = req.body.genre;
            return data;
        }
    })
    res.status(200).json(book);
}

exports.deleteAPI = (req, res) => {
    book = book.filter(data => data.id_book !== +req.params.id)
        res.status(200).json({
            error: false,
            message: `book with id ${req.params.id} deleted successfully!`
        });
};