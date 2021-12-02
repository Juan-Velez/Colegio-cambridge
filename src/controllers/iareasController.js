const controllerIarea = {};

controllerIarea.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM Areas', (err, areas) => {
            if (err) {
                res.json(err);
            }
            console.log(areas);
            res.render('iareas', {
                data: areas
            });
        });
    });
};

module.exports = controllerIarea;