import {square, cube} from '../logic/calculator.js'

export const squareController = (req, res) => {
    
    const numero = parseInt(req.params.numero);
    
    const result = square(numero);
    
    res.send(`El cuadrado de ${numero} es ${result}`);
}

export const  cubeController = (req, res) => {

    const numero = parseInt(req.params.numero);

    const result = cube(numero);

    res.send(`El cubo de ${numero} es ${result}`);
}