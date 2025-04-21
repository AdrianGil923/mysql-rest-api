const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/users', controllers.createUser);
router.get('/users', controllers.getAllUsers);
router.get('/users/:id', controllers.getUserById); // Ruta para obtener usuario por ID
router.delete('/users/:id', controllers.deleteUser); // Ruta corregida para eliminar usuario por ID
router.put('/users/:id', controllers.updateUser); // Ruta corregida para actualizar usuario por ID

module.exports = router;

