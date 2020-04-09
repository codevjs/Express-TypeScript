import express, {Application} from 'express';
import bodyParser from "body-parser";

// routing
import Routing from "../routing";

export default class App {

    private port : number = 8000;
    private _app : Application;

    constructor() {

        this._app = express();
        this.plugins(); // execute plugins
        this.routes()   // execute routes
    }

    private plugins() : void {

        this._app.use(bodyParser.json());
        this._app.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes() : void {

        new Routing(this._app)
    }

    public start() : void {

        this._app.listen(this.port, () => {

            console.log("sever run on port " + this.port);
        });
    }
}
