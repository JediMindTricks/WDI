const 
	express = require('express'),
	apiRouter = express.Router(),
	apiCtrl = require('../controllers/api.js')


	apiRouter.route('/')
		.get(apiCtrl.index)
		.post(apiCtrl.create)


	apiRouter.route('/:id')
		.patch(apiCtrl.update)
		.delete(apiCtrl.destroy)


module.exports = apiRouter