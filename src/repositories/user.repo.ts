import user from "../models/user.model";


interface IUserRepository{
    save(User: user): Promise<user>
}


class UserRepository implements IUserRepository{
    async save(User: user): Promise<user>{
        try {
            return await user.create({
              first_name: User.first_name,
              last_name: User.last_name,
              email: User.email,
              mobile: User.mobile,
              address: User.address
            });
          } catch (err) {
            throw new Error("Failed to create User!");
          }

    }
}


export default new UserRepository();