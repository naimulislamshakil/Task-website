const INPUT_SCHEMA = require('../Schema/input.schema');

exports.createSelectorService = async (data) => {
	const result = await INPUT_SCHEMA.create(data);
	return result;
};

exports.getSelectorService = async () => {
	const result = await INPUT_SCHEMA.find();
	return result;
};
exports.getSelectorByIdService = async (id) => {
	const result = await INPUT_SCHEMA.findById({ _id: id });

	return result;
};
exports.updateSelectorByIdService = async (id, data) => {
	const result = await INPUT_SCHEMA.updateOne({ _id: id }, data);

	return result;
};
