import UsersController from "../controllers/user.controller";
import { Router } from "express";


class UserRoutes{

    router = Router();
    controller = new UsersController();


    constructor(){
        this.initializeRoutes()
    }

    initializeRoutes(){
        this.router.post('/', this.controller.create)
    }

}


export default new UserRoutes().router