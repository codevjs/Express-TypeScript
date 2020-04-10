import {Request, Response} from 'express';
// interface
import ControllerInterface from "../interface/controller.interface";

class AuthController implements ControllerInterface {

    signIn(req: Request, res: Response) : Response {

        return res.send("wow");
    }

    signUp(req: Request, res: Response) : Response {

        return res.send("wow");
    }

    public router() : object[] {

        return  [
                    { path : '/auth/login',  controller : this.signIn, method : "post"},
                    { path : '/auth/register',  controller : this.signUp, method : "post"}
                ]
    }
}

export default new AuthController();
