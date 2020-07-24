exports.homePage = (req, res) => {
    res.render('index', {
        title: 'Home Page Tittle',
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
};

exports.postTest = (req, res) => {
    res.send(`Valor do Input ${req.body.name}`);
    return;
}