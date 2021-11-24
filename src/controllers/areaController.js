const controllerArea = {};


controllerArea.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM Areas', (err, areas) => {
            if (err) {
                res.json(err);
            }
            console.log(areas);
            res.render('area', {
                data: areas
            });
        });
    });
};

controllerArea.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Areas set ?', [data], (err, area) => {
            res.redirect('/area');
        });
    });
};

controllerArea.edit = (req, res) =>{
    const { idArea } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM Areas WHERE idArea = ?', [idArea], (err, area) => {
            res.render('area_edit', {
                data: area[0]
            });
        });
    });
};

controllerArea.update = (req, res) =>{
    const { idArea } = req.params;
    const nuevaArea = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE Areas set ? WHERE idArea = ?', [nuevaArea, idArea], (err, area) => {
            res.redirect('/area');
        });
    });
};

controllerArea.delete = (req, res) => {
    const { idArea } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Areas WHERE idArea = ?', [idArea], (err, rows) => {
            res.redirect('/area');
        });
    })
};

module.exports = controllerArea;
