const controllerOficina = {};

controllerOficina.list = (req, res) => {
    var area = null;
    var oficina = null;
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM Oficinas', (err, oficinas) => {
            oficina = oficinas;
            console.log(oficina);
            if (err) {
                res.json(err);
            }
        });
        conn.query('SELECT *FROM Areas', (err, areas) => {
            area = areas;
            console.log(area);
            if (err) {
                res.json(err);
            }
            res.render('oficina', {
                oficina: oficina,
                area: area
            });
        })
    });
};

controllerOficina.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Oficinas set ?', [data], (err, oficina) => {
            res.redirect('/oficina');
        });
    });
};

controllerOficina.edit = (req, res) =>{
    const { idOficina } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM Oficinas WHERE idOficina = ?', [idOficina], (err, oficina) => {
            res.render('oficina_edit', {
                data: oficina[0]
            });
        });
    });
};

controllerOficina.update = (req, res) =>{
    const { idOficina } = req.params;
    const nuevaOficina = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE Oficinas set ? WHERE idOficina = ?', [nuevaOficina, idOficina], (err, oficina) => {
            res.redirect('/oficina');
        });
    });
};

controllerOficina.delete = (req, res) => {
    const { idOficina } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Oficinas WHERE idOficina = ?', [idOficina], (err, rows) => {
            res.redirect('/oficina');
        });
    })
};


module.exports = controllerOficina;