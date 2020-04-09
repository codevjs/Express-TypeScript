import  { Router } from 'express';
// interface
import RoutesInterface from "../interface/routes.interface";
// controller
import User from "../controller/user.controller";

class MainRoutes implements RoutesInterface{

    public router : Router = Router();

    constructor() {
        this.endPoint();
    }

    public endPoint() : void {

        // users endpoint
        this.router.route("/users")
            .get(User.show)
            .post(User.create)


    }
}

export default new MainRoutes().router;

