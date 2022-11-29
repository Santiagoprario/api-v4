import { Router } from 'express';
import UserController from '../../controllers/UserController';

const test: Router = Router();

test.route('/test').get(UserController.getUsers);

export default test;
