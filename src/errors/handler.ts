import {ErrorRequestHandler} from 'express';
import { ValidationError } from 'yup';

 interface ValidationErrors {
    [key: string]: string[];
 }


const handlerError: ErrorRequestHandler = (error, req, res, next) => {

	if(error instanceof ValidationError){
		let errors: ValidationErrors = {};

		error.inner.forEach(err => {
			error[error.path] = err.errors;
		});

		return res.status(400).json({message: 'validation fails', errors})
	}
    console.error(error);

    return res.status(500).json({message: 'internal server error'});
};

export default handlerError;