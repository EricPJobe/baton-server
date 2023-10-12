// Router example
import { Router } from 'express';

import { controller } from '../../controllers';
import { logger } from '../../middleware';

const router = Router();

router.get('/', logger, controller.getAll);

router.get('/:id', logger, controller.getById);

router.post('/', logger, controller.create);

export default router;