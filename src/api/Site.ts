import siteController from '../controller/siteController';
import { Router } from 'express';

const router = Router();

router.post('/add', siteController.add);
router.delete('/delete', siteController.del);
router.get('/', siteController.getall);

export default router;