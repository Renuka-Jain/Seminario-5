import { Schema, model } from 'mongoose';

const Site = new Schema({
	name: String,
	address: String
});

export default model('Site', Site);