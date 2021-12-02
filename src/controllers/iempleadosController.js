const controllerIempleado = {};

controllerIempleado.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM Empleados', (err, empleados) => {
            if (err) {
                res.json(err);
            }
            console.log(empleados);
            res.render('iempleados', {
                data: empleados
            });
        });
    });
};

module.exports = controllerIempleado;