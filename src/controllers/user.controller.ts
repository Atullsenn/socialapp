import { Request, Response } from "express";
import {user} from "../models/user.model";
import userRepo from "../repositories/user.repo";
import { validationResult } from "express-validator";

export default class UsersController {
    async create(req: Request, res: Response) {
      
      const errors = validationResult(req)
      if(!errors.isEmpty()){
        return res.status(400).send({
          success: false,
          message: 'msg',
          errors: errors.array()
        })
      }
  
      try {
        const user: user = req.body;
       
  
        const savedUser = await userRepo.save(user);
  
        res.status(201).send(savedUser);
      } catch (err) {
        res.status(500).send({
          message: "Some error occurred while data inserted."
        });
      }
    }


    async findAll(req: Request, res: Response){

      try{

        const userData = await userRepo.getAllUser();

        return res.status(200).send({
          success: true,
          message: 'getting data successfully',
          userData: userData
        })

      }

      catch(err){
        return res.status(500).send({
          success: false,
          message: 'network error'
        })
      }
     
    }


    async findById(req: Request, res: Response){
      const id:string = req.params.id
      try{
        const user = await userRepo.getUserById(id)
        if(user){
          return res.status(200).send({
            success: true,
            message: 'Getting data successfully',
            userData: user
          })
        }

        else{
          return res.status(400).send({
            success: false,
            message: 'user not found'
          })
        }
      }

      catch(err){
        return res.status(500).send({
          success: false,
          message: 'Network Error'
        })
      }
    }


    async updateUser(req: Request, res:Response){
      let User:user = req.body;
      try{

        const num = await userRepo.update(User);

      if (num == 1) {
        res.status(200).send({
          success: true,
          message: "User updated successfully"
        })
      } else {
        res.send({
          success: false,
          message: `Cannot update user with id=${User.id}.`
        });
      }
      }

      catch(err){
        return res.status(500).send({
          success: false,
          message: 'Network error'
        })
      }
    }
  
  
    
  }
  