import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

class PluginConfig {

    static plugins() : any[] {

        return [
            bodyParser.json(),
            bodyParser.urlencoded({ extended: false }),
            compression(),
            cors(),
            helmet()
        ]
    }
}

export default PluginConfig;
