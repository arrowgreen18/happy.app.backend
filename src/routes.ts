import { Router } from 'express';
import { getRepository } from 'typeorm';
import './database/connection';
import Orfanate from './models/orfanage';
import multer from 'multer';
import uploadConfig from './config/upload';
import orfanateView from './views/orfanates_view';
import * as Yup from 'yup';


const routes = Router();
const upload = multer(uploadConfig);

routes.get('/create-orfanate', async  (req, res) => {

     	const orfanateRepository = getRepository(Orfanate);
     	const getOrfanates = await orfanateRepository.find({
     		relations: ['images']
     	});

     	return res.json(orfanateView.renderMany(getOrfanates));
});


routes.get('/create-orfanate/:id', async  (req, res) => {

	    const { id } = req.params;

     	const orfanateRepository = getRepository(Orfanate);
     	const getOrfanate = await orfanateRepository.findOneOrFail(id, {
     		relations: ['images']
     	});

     	return res.json(orfanateView.render(getOrfanate));
});

routes.post('/create-orfanate', upload.array('images'), async (req, res) => {

	const {

		name,
		latitude,
		longitude,
		about,
		instructions,
		open_hour,
		open_on_weekends,

	} = req.body;


	const orfanateRepository = getRepository(Orfanate);

	const requestImages = req.files as Express.Multer.File[];
	const images = requestImages.map(image => {
        return {
        	path: image.filename
        }
	});


	const data = {
		name,
		latitude,
		longitude,
		about,
		instructions,
		open_hour,
		open_on_weekends,
		images
    }

    const schema = Yup.object().shape({
    	name: Yup.string().required(),

        latitude: Yup.number().required(),

        longitude: Yup.number().required(),

        about: Yup.string().required().max(300),

        instructions: Yup.string().required(),

        open_hour: Yup.string().required(),

        open_on_weekends: Yup.boolean().required(),

        images: Yup.array(
        	Yup.object().shape({
        	path: Yup.string().required()
        }))
    });

    await schema.validate(data, {
    	abortEarly: false,
    });


    const orfanateQuery = orfanateRepository.create(data);

	await orfanateRepository.save(orfanateQuery);

	return res.status(201).json(orfanateQuery);
});

export default routes;
