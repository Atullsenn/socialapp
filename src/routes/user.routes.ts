import UsersController from "../controllers/user.controller";
import { Router } from "express";
import {signupUserValidation} from '../validation/user.validation'
import { upload } from "../middlewares/upload";


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
        this.router.put('/:id', upload.single('profile'), this.controller.updateUser);
        
    }

}


export default new UserRoutes().router;