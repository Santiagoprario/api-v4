import { Router } from 'express';
import mainRouter from './main';
import usersRouter from './users';
import rolesRouter from './roles';

const router: Router = Router();
// router.use('/', mainRouter);
// router.use('/users', usersRouter);
// router.use('/roles', rolesRouter);
router.use('/', async (req, res) => {
    res.send(200).json('OK MAURO');
});

export default router;
