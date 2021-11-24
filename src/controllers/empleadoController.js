const controllerEmpleado = {};

controllerEmpleado.list = (req, res) => {
    var resultado = null,  resultado2 = null;
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM Empleados', (err, empleados) => {
            resultado = empleados;
            console.log(resultado);
            if (err) {
                res.json(err);
            }
        });
        conn.query('SELECT *FROM Areas', (err, areas) => {
            resultado2 = areas;
            console.log(resultado2);
            res.render('empleado', {
                resultado: resultado,
                resultado2: resultado2
            });
        })
    });
};

controllerEmpleado.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Empleados set ?', [data], (err, resultado) => {
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