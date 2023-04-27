const routers = require('express').Router();
const SelectorCollactio = require('../../Collaction/selecttors.collaction');

routers.route('/selector').post(SelectorCollactio.createSelectorColiction);

module.exports = routers;
