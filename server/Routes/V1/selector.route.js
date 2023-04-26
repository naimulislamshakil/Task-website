const routers = require('express').Router();
const SelectorCollactio = require('../../Collaction/selecttors.collaction');

routers.route('/selector').get(SelectorCollactio.getSelectorColiction);

module.exports = routers;
