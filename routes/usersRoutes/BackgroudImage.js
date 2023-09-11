import express from 'express';
import getBackgroudImage from '../../controllers/usersControllers/getbackgroudImage.js';
import updateBackgroudImage from '../../controllers/usersControllers/UpdateBackgroudImage.js';
let router = express.Router();

router.get('/:id', getBackgroudImage)
router.put('/:id', updateBackgroudImage)

export default router;