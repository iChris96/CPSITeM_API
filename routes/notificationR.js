const router = require('express').Router();
const { notificationCtrl } = require('../controllers');

router.get('/', notificationCtrl.getAll);

router.get('/:id', notificationCtrl.get);

router.post('/', notificationCtrl.create);

router.patch('/:id', notificationCtrl.update);

router.delete('/:id', notificationCtrl.delete);
module.exports = router;
