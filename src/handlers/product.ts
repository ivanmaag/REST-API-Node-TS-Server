import { Request, Response } from 'express'
import Product from '../models/Product.model'

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll({
            attributes: {exclude: ['createdAt', 'updatedAt']}
        })
        res.json({data: products})
    } catch (error) {
        console.log(error)
    }
}

export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(Array.isArray(id) ? id[0] : id)
        if(!product) {
            return res.status(404).json({error: 'Producto no encontrado'})
        }

        res.json({data: product})
    } catch (error) {
        console.log(error)
    }
}

export const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json({data: product})
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(Array.isArray(id) ? id[0] : id)
    if(!product) {
        return res.status(404).json({error: 'Producto no encontrado'})
    }
    // Actualizando
    await product.update(req.body)
    await product.save()

    res.json({data: product})
}

export const updateStock = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(Array.isArray(id) ? id[0] : id)
    if(!product) {
        return res.status(404).json({error: 'Producto no encontrado'})
    }
    // Actualizando
    product.stock = req.body.stock
    await product.save()

    res.json({data: product})
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(Array.isArray(id) ? id[0] : id)
    if(!product) {
        return res.status(404).json({error: 'Producto no encontrado'})
    }
    // Eliminando
    await product.destroy()
    res.json({data: 'Producto eliminado'})
}
