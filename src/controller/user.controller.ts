import {Request, Response} from 'express';
// interface
import ControllerInterface from "../interface/controller.interface";

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

    public router() : any[] {

        return  [
                    { path : '/users', controller : this.show, method : 'get'},
                    { path : '/users', controller : this.create, method : 'post'}
                ]
    }
}

export default new UserController()
