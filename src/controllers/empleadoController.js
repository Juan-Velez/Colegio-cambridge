const controllerEmpleado = {};

controllerEmpleado.list = (req, res) => {
    var empleado = null;
    var area = null;
    var oficina = null;
    var salon = null;
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM Empleados', (err, empleados) => {
            empleado = empleados;
            console.log(empleado);
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
        });
        conn.query('SELECT *FROM Oficinas', (err, oficinas) => {
            oficina = oficinas;
            console.log(oficina);
            if (err) {
                res.json(err);
            }
        });
        conn.query('SELECT *FROM Salones', (err, salones) => {
            salon = salones;
            console.log(salon);
            if (err) {
                res.json(err);
            }
            res.render('empleado', {
                empleado: empleado,
                area: area,
                oficina: oficina,
                salon: salon
            });
        });
    });
};

controllerEmpleado.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Empleados set ?', [data], (err, empleado) => {
            res.redirect('/');
        });
    });
};

controllerEmpleado.edit = (req, res) =>{
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM Empleados WHERE id = ?', [id], (err, empleado) => {
            res.render('empleado_edit', {
                data: empleado[0]
            });
        });
    });
};

controllerEmpleado.update = (req, res) =>{
    const { id } = req.params;
    const nuevoEmpleado = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE Empleados set ? WHERE id = ?', [nuevoEmpleado, id], (err, empleado) => {
            res.redirect('/');
        });
    });
};

controllerEmpleado.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Empleados WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    })
};

module.exports = controllerEmpleado;