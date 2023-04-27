const SelectorService = require('../Services/selector.service');

exports.createSelectorColiction = async (req, res) => {
	try {
		const data = await SelectorService.createSelectorService(req.body);
		res.status(200).json({
			status: 'Success',
			message: 'Data create Successfully.',
		});
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: 'Data get not successfully.',
		});
	}
};

exports.getSelectorColiction = async (req, res) => {
	try {
		const data = await SelectorService.getSelectorService();
		res.status(200).json({
			status: 'Success',
			message: 'Data get Successfully.',
			data,
		});
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: 'Data get not successfully.',
		});
	}
};

exports.getSelectorByIdColiction = async (req, res) => {
	try {
		const { id } = req.params;
		const data = await SelectorService.getSelectorByIdService(id);
		res.status(200).json({
			status: 'Success',
			message: 'Data get Successfully.',
			data,
		});
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: 'Data get not successfully.',
		});
	}
};
