const routers = require('express').Router();
const SelectorCollactio = require('../../Collaction/selecttors.collaction');

routers
	.route('/getSelector/:id')
	.get(SelectorCollactio.getSelectorByIdColiction)
	.put(SelectorCollactio.updateSelectorByIdColiction);
routers.route('/getSelector').get(SelectorCollactio.getSelectorColiction);
routers.route('/selector').post(SelectorCollactio.createSelectorColiction);

module.exports = routers;
