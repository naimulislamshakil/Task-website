const INPUT_SCHEMA = require('../Schema/input.schema');

exports.createSelectorService = async (data) => {
	const result = await INPUT_SCHEMA.create(data);
	return result;
};

exports.getSelectorService = async () => {
	const result = await INPUT_SCHEMA.find();
	return result;
};
