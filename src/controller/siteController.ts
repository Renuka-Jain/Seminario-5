import Site from '../model/Site';
import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js';
import { Request, Response } from 'express';

const add = async (req: Request, res: Response) => {
	const name = req.body.name;
	const address = req.body.address;
	const newSite = new Site({ name, address });
	await newSite.save();
	const token = jwt.sign({ id: newSite._id }, 'yyt#KInN7Q9X3m&$ydtbZ7Z4fJiEtA6uHIFzvc@347SGHAjV4E', {
		expiresIn: 60 * 60 * 24
	});
	res.status(200).json({ auth: true, token });
};


const del = async (req: Request, res: Response) => {
	const name = req.body.name;
	const findsite = await Site.findOne({ name });
	if (!findsite) {
		return res.status(400).json({ message: 'Site not found' });
	}
	await Site.findByIdAndDelete(findsite._id);
	res.status(200).json({ auth: true });
};

const getall = async (req: Request, res: Response) => {
	const sites = await Site.find();
	res.json(sites);
};



export default {
	add,
	del,
	getall,

};