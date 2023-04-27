const SelectorService = require('../Services/selector.service');

exports.createSelectorColiction = async (req, res) => {
	try {
		const data = await SelectorService.createSelectorService(req.body);
		res.status(200).json({
			status: 'Success',
			message: 'User create Successfully.',
			data,
		});
	} catch (error) {
		res.status(200).json({
			status: 'Failed',
			message: 'Data get not successfully.',
		});
	}
};
