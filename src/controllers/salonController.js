const controllerSalon = {};

controllerSalon.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM Salones', (err, salones) => {
            if (err) {
                res.json(err);
            }
            console.log(salones);
            res.render('salon', {
                data: salones
            });
        });
    });
};

controllerSalon.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Salones set ?', [data], (err, salon) => {
            res.redirect('/salon');
        });
    });
};

controllerSalon.edit = (req, res) =>{
    const { idSalon } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM Salones WHERE idSalon = ?', [idSalon], (err, salon) => {
            res.render('salon_edit', {
                data: salon[0]
            });
        });
    });
};

controllerSalon.update = (req, res) =>{
    const { idSalon } = req.params;
    const nuevoSalon = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE Salones set ? WHERE idSalon = ?', [nuevoSalon, idSalon], (err, salon) => {
            res.redirect('/salon');
        });
    });
};

controllerSalon.delete = (req, res) => {
    const { idSalon } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Salones WHERE idSalon = ?', [idSalon], (err, rows) => {
            res.redirect('/salon');
        });
    })
};

module.exports = controllerSalon;