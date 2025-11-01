import express from 'express';
const appRoutes = express.Router();



//ROTAS USERS
appRoutes.post("/users", usersController.create);
appRoutes.get("/users", usersController.getAll);




export default appRoutes;