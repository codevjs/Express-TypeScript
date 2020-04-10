import {Request, Response} from 'express';
// interface
import ControllerInterface from "../interface/controller.interface";

class AuthController implements ControllerInterface {

    sigIn(req: Request, res: Response) : Response {

        return res.send("wow");
    }

    public router() : any[] {

        return  [
            { path : '/auth',  controller : this.sigIn, method : "post"}
        ]
    }
}

export default new AuthController();
