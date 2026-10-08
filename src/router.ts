import { Router } from 'express'
import { body, param } from 'express-validator'
import { createProduct, getProducts, getProductById, updateProduct, updateStock, deleteProduct } from './handlers/product'
import { handleInputErrors } from './middleware/index'

const router = Router()

// Routing
router.get('/', getProducts)
router.get('/:id', param('id').isInt().withMessage('ID no válido'), handleInputErrors, getProductById)

router.post('/',
    //Validación 
    body('name')
        .notEmpty().withMessage('El nombre es obligatorio'),
    body('price')
        .isNumeric().withMessage('El precio debe ser un número')
        .notEmpty().withMessage('El precio es obligatorio')
        .custom(value => value > 0).withMessage('El precio debe ser mayor a 0'),
    handleInputErrors,
    createProduct
)

router.put('/:id',
    //Validación
    param('id').isInt().withMessage('ID no válido'),
    body('name')
        .notEmpty().withMessage('El nombre es obligatorio'),
    body('price')
        .isNumeric().withMessage('El precio debe ser un número')
        .notEmpty().withMessage('El precio es obligatorio')
        .custom(value => value > 0).withMessage('El precio debe ser mayor a 0'),
    body('stock')
        .isNumeric().withMessage('El stock debe ser un número')
        .notEmpty().withMessage('El stock es obligatorio')
        .custom(value => value >= 0).withMessage('El stock debe ser un número no negativo'),
    handleInputErrors,
    updateProduct
)

router.patch('/:id',
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    updateStock)

router.delete('/:id',
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    deleteProduct
)

export default router
