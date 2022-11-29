import { Request, Response } from 'express';
import { UserTest } from '../models/userTests';

class UserController {
    async getUsers(req: Request, res: Response): Promise<void> {
        try {
            const user = await UserTest.find({});
            if (!user) res.send({ message: 'No hay usuarios' });
            res.send({
                message: 'Users fetched successfully',
                data: user
            });
        } catch (error) {
            console.log(error);
        }
    }

    // async createUser(
    //     req: Request,
    //     res: Response,
    //     next: NextFunction
    // ): Promise<void> {
    //     try {
    //         const payload: CreateUserType = req.body;
    //         const user = await UserService.createUser(payload);
    //         res.status(200).send({
    //             message: 'User created successfully',
    //             data: user
    //         });
    //     } catch (error) {
    //         next(error);
    //     }
    // }

    // async getUserDetail(
    //     req: Request,
    //     res: Response,
    //     next: NextFunction
    // ): Promise<void> {
    //     try {
    //         const userId = Number(req.params.id);
    //         const user = await UserService.getUserDetail(userId);
    //         res.status(200).send({
    //             message: 'User details fetched successfully',
    //             data: user
    //         });
    //     } catch (error) {
    //         next(error);
    //     }
    // }

    // async updateUser(
    //     req: Request,
    //     res: Response,
    //     next: NextFunction
    // ): Promise<void> {
    //     try {
    //         const userId = Number(req.params.id);
    //         const payload: UpdateUserType = req.body;
    //         await UserService.updateUser(userId, payload);
    //         res.status(200).send({
    //             message: 'User updated successfully'
    //         });
    //     } catch (error) {
    //         next(error);
    //     }
    // }

    // async deleteUser(
    //     req: Request,
    //     res: Response,
    //     next: NextFunction
    // ): Promise<void> {
    //     try {
    //         const userId = Number(req.params.id);
    //         await UserService.deleteUser(userId);
    //         res.status(200).send({
    //             message: 'User deleted successfully'
    //         });
    //     } catch (error) {
    //         next(error);
    //     }
    // }
}

export default new UserController();
