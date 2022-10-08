import { Schema, model } from 'mongoose';

const Booking = new Schema({
	name: String,
	user: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	site: {
		type: Schema.Types.ObjectId,
		ref: "Site"
	},
});

export default model('Booking', Booking);