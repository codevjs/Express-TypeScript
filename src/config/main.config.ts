import express, {Application} from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

// routing
import Routing from "../routes/main.routes";

export default class MainConfig {

    private port    : number = 8000;
    private _app    : Application;

    constructor() {
        this._app    = express();
        this.plugins(); // execute plugins
        this.routes()   // execute routes
    }

    private plugins() : void {
        this._app.use(bodyParser.json());
        this._app.use(bodyParser.urlencoded({ extended: false }));
        this._app.use(compression());
        this._app.use(cors());
        this._app.use(helmet());
    }

    private routes() : void {
       this._app.use("/api/v1", Routing);
    }

    public start() : void {

        this._app.listen(this.port, () => {

            console.log("sever run on port " + this.port);
        });
    }
}
