const { Router } = require('express');

const UsersController = require('../controllers/UsersController');

const usersRoutes = Router();


// function myMiddleware(request, response, next) {
//   console.log('Você está no middleware!');
  
//   if (!request.body.isAdmin) {
//     return response.status(401).json({ message: "User unauthorized"});
//   }

//   next();
// }


const usersController = new UsersController();

// Para todas as rotas:
// usersRoutes.use(myMiddleware);
// Para rotas específicas:
// usersRoutes.post('/', myMiddleware, usersController.create);

usersRoutes.post('/', usersController.create);

module.exports = usersRoutes;