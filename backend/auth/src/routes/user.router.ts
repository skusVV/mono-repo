import{ Request, Response, Application, } from 'express';
import R from 'ramda';

import UserModel from '../schemas/user.schema';
interface User {
    firstName: string;
    lastName: string;
}
const user = {
    firstName: 'Vitalii',
    lastName: 'S',
    // email: 'vitalii@gmail.com',
    // password: '22283',
    // phone: '093 222 2 2333',
    // age: 30,
    // img: 'https://avatars.githubusercontent.com/u/16208663?v=4'
}

const getUser = R.pickAll(['firstName', 'lastName']);

export const userRouter = (app: Application) => {
    app.get('/api/v1/users/:id', (req: Request, res: Response) => {
        return res.send(user);
    });

    app.get('/api/v1/users', async (req: Request, res: Response) => {
        try {
            const users = await UserModel.find();
            return res.send(users.map(getUser));
        } catch(e) {
            console.log(e);
            return res.send([]);
        }
    });

    app.post('/api/v1/users', (req: Request, res: Response) => {
        const newUser = new UserModel({ ...user });
        newUser.save();
        return res.send(newUser);
    });

    app.patch('/api/v1/users/:id', (req: Request, res: Response) => {
        return res.send([ user ]);
    });
}