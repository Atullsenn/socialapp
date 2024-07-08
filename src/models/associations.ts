import {user, user_address, user_post} from '../models/user.model';


// post association
user.hasMany(user_post,{
    foreignKey: 'owner_id',
    as: 'posts'
})

user_post.belongsTo(user);


// address association
user.hasOne(user_address,{
    foreignKey: 'user_id',
    as: 'address'
})

user_address.belongsTo(user)