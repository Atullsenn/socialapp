import multer from 'multer';
import path from 'path';
import { Request } from 'express';


const storage = multer.diskStorage({
    destination: (req: Request, file, cb)=>{
        if(file.mimetype == 'image/png' || file.mimetype == 'image/jpeg'){
            cb(null, path.join(__dirname, '../public/images'))
        }
    },

    filename: (req: Request, file, cb)=>{
        const name = Date.now() + "_" + file.originalname;
        cb(null, name)
    }
})


const fileFilter = (req:Request, file:any, cb:any)=>{
    if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/png'){
        cb(null, true)
    }

    else{
        cb(null, false)
    }
}

const upload = multer({storage: storage, fileFilter: fileFilter });

export {upload}