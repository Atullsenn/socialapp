import { Request, Response } from "express";
import user from "../models/user.model";
import userRepo from "../repositories/user.repo";

export default class UsersController {
    async create(req: Request, res: Response) {
      if (!req.body.first_name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
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
  