var express = require('express');
var router = express.Router();
var quizController= require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/author', function(req, res, next) {
  res.render('author');
});
router.get('/question',quizController.question);
router.get('/check',quizController.check);
router.get('/quizzes.:format?', middlewares);
 router.get('/quizzes/:quizId(\\d+).:format?', middlewares);
router.get('/users', userController.index);   // listado usuarios
router.get('/users/:userId(\\d+)',      userController.show);    // ver un usuario
router.get('/users/new',                userController.new);     // formulario sign un
router.post('/users',                   userController.create);     // registrar usuario
router.get('/users/:userId(\\d+)/edit', sessionController.loginRequired, sessionController.adminOrMyselfRequired, userController.edit);    // editar cuenta
router.get('/users/:userId(\\d+)', sessionController.loginRequired, sessionController.adminOrMyselfRequired, userController.update);    // actualizar cuenta
router.delete('/users/:userId(\\d+)', sessionController.loginRequired, sessionController.adminAndNotMyselfRequired, userController.destroy);    // borrar cuenta

module.exports = router;
