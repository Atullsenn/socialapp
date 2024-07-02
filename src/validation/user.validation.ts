import {check} from 'express-validator';


const signupUserValidation = [
    check('first_name', 'name is required').not().isEmpty(),
    check('last_name', 'last_name is required').not().isEmpty(),
    check('email', 'email is required').isEmail().normalizeEmail({
        gmail_remove_dots: true
    }),
    check('mobile', 'mobile number should be contain 10 digits').isLength({
        min: 10,
        max: 10
    }),
    check('address', 'address is required').not().isEmpty(),
    check('password', 'password must be greater than 6 character and atleast containg should be one uppercase, one lowercase and one spacial character and one number').isStrongPassword({
        minLength:6,
        minLowercase:1,
        minUppercase: 1,
        minNumbers:1
    })
]

export{signupUserValidation}