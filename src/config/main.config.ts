import express, {Application} from 'express';
// routing
import Routing from "../routes/main.routes";
// plugins
import PluginConfig from "./plugin.config";

export default class MainConfig {

    private baseApi : string = "/api/v1";
    private port    : number = 8000;
    private _app    : Application;

    constructor() {
        this._app    = express();
        this.plugins(); // execute plugins
        this.routes()   // execute routes
    }

    private plugins() : void {
        PluginConfig.plugins().forEach(plugin => {
            this._app.use(plugin)
        })
    }

    private routes() : void {
       this._app.use(this.baseApi, Routing);
    }

    public start() : void {
        this._app.listen(this.port, () => {
            console.log("sever run on port " + this.port);
        });
    }
}
