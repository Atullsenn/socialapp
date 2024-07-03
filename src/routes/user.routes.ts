import UsersController from "../controllers/user.controller";
import { Router } from "express";
import {signupUserValidation} from '../validation/user.validation'


class UserRoutes{

    router = Router();
    controller = new UsersController();


    constructor(){
        this.initializeRoutes()
    }

    initializeRoutes(){
        this.router.post('/', signupUserValidation, this.controller.create);
        this.router.get('/', this.controller.findAll);
        this.router.get('/:id', this.controller.findById);
    }

}


export default new UserRoutes().router