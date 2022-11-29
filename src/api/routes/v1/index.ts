import { Router } from 'express';
import test from './test';

const router: Router = Router();
// router.use('/', mainRouter);
// router.use('/users', usersRouter);
// router.use('/roles', rolesRouter);
router.use('/', test);
router.use('/', async (req, res) => {
    return res.json('OK MAURO');
});

export default router;
