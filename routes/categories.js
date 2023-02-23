import express from 'express'
import Category from './../models/Category.js'
let router = express.Router()

router.get(
    '/', 
    (req,res) => { 
        //console.log(req)
        return res
            .status(200) 
            .send('aca deberias ver todas las categorias')
    }
)

router.post(
    '/',
    async (req,res) => {
        try {
            let category = await Category.create(req.body)
            return res.status(201).json({
                success: true,
                category: category,
                id: category._id
            })
        } catch(error) {
            console.log(error)
            return res.status(400).json({
                success: false,
                message: 'no se pudo crear'
            })
        }        
    }
)

export default router