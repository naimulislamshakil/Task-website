const SelectorService = require('../Services/selector.service');

exports.getSelectorColiction = async (req, res) => {
	try {
		const data = await SelectorService.getSelectorService();
	} catch (error) {
		res.status(200).json({
			status: 'Failed',
			message: 'Data get not successfully.',
		});
	}
};
