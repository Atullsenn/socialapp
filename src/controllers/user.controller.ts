import { Request, Response } from "express";
import user from "../models/user.model";
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
  
  
    
  }
  