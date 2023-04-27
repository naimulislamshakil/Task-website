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
			message: 'User get Successfully.',
			data,
		});
	} catch (error) {
		res.status(404).json({
			status: 'Failed',
			message: 'Data get not successfully.',
		});
	}
};
