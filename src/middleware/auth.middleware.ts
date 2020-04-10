import {Request, Response, NextFunction} from 'express'
// interface
import MiddlewareInterface from "../interface/middleware.interface";

class AuthMiddleware implements MiddlewareInterface {

    public checkAuth(req: Request, res: Response, next: NextFunction): void {
        console.log("with middleware");
        next();
    }

}

export default new AuthMiddleware().checkAuth;
