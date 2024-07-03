import {user} from "../models/user.model";
import {GenerateSalt, GenratePassword} from '../utility/password.utility'

interface IUserRepository{
    save(User: user): Promise<user>
    getAllUser(User: user):Promise<user[]>
}



class UserRepository implements IUserRepository{
    async save(User: user): Promise<user>{
      const salt = await GenerateSalt()
      let UserPassword = User.password
      const userPass =  await GenratePassword(UserPassword, salt)
      
        try {
            return await user.create({
              first_name: User.first_name,
              last_name: User.last_name,
              email: User.email,
              mobile: User.mobile,
              address: User.address,
              password: userPass
            });
          } catch (err) {
            throw new Error("Failed to create User!");
          }

    }


    async getAllUser(): Promise<user[]> {
      try {
  
        return await user.findAll({attributes:['first_name', 'last_name', 'email', 'mobile', 'address', 'profile']});
      } catch (error) {
        throw new Error("Failed to retrieve Tutorials!");
      }
    }
}


export default new UserRepository();