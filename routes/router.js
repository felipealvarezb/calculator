import express from 'express'
import { squareController, cubeController } from '../controllers/mathControllers.js'

const router = express.Router()

router.get('/square/:numero', squareController)
router.get('/cube/:numero', cubeController)

export default router