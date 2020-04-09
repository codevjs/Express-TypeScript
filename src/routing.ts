import {Application} from 'express';

//controller
import User from "./controller/user";

export default class Routing {

    private _app : Application;

    constructor(app : Application) {

        this._app = app;
        this.routes()
    }

    private routes() : void {

        this._app.route('/users')
            .get(User.readUser)
            .post(User.createUser)
    }
}


