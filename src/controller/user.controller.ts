import {Request, Response} from 'express';
// interface
import ControllerInterface from '../interface/controller.interface';
// middleware
import AuthMiddleware from '../middleware/auth.middleware';

class UserController implements ControllerInterface {

    index(req: Request, res: Response) : Response {
        return res.send("");
    }

    create(req: Request, res: Response) : Response {
        return res.send(req.body);
    }

    show(req: Request, res: Response) : Response {
        return res.send("Hello user");
    }

    update(req: Request, res: Response) : Response {
        return res.send("");
    }

    delete(req: Request, res: Response) : Response {
        return res.send("");
    }

    public router() : object[] {

        return  [
                    { method : 'get', path : '/users', controller : this.show, middleware : AuthMiddleware},
                    { method : 'post', path : '/users', controller : this.create}
                ]
    }
}

export default new UserController()
