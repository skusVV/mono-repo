import{ Request, Response, Application, } from 'express';

const user = {
    firstName: 'Vitalii',
    lastName: 'S'
}

export const userRouter = (app: Application) => {
    app.get('/api/v1/user/:id', (req: Request, res: Response) => {
        return res.send(user);
    });

    app.get('/api/v1/users', (req: Request, res: Response) => {
        return res.send([ user ]);
    });
}