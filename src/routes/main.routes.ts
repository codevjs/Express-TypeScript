import  { Router } from 'express';
// interface
import RoutesInterface from "../interface/routes.interface";

// controller
// @ts-ignore
import * as Controllers from "../controller";

class MainRoutes implements RoutesInterface{

    public router : Router = Router();

    constructor() {
        this.endPoint();
    }

     public endPoint() : void {
        [].concat.apply([], Object.keys(Controllers).map(key => Controllers[key].router()))
            .forEach(route => {
                // @ts-ignore
                this.router[route.method](route.path, route.controller)
            })
    }
}

export default new MainRoutes().router;

