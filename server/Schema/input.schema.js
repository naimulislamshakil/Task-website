const mongoose = require('mongoose');

const inputSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			minLength: [2, 'Name shout be at least 5 letter.'],
			maxLength: [100, 'Name is too large.'],
			trim: true,
		},
		selector: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{
		timestamps: true,
	}
);

const INPUT_SCHEMA = mongoose.model('Input', inputSchema);

module.exports = INPUT_SCHEMA;
