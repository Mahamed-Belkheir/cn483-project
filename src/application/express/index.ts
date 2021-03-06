import Express from 'express';
import routers from './api';
import frontend from "./frontend";
import errorHandler from './error';
import { config } from '../../dependency/config';
import cookieParser from "cookie-parser";

const server = Express();
const port = config.server.port;

server.use(cookieParser())
server.use(Express.json())
server.use(Express.urlencoded())
server.use('/', frontend)
server.use('/api', routers);

server.use(errorHandler)

if (require.main === module) {
    server.listen(port, ()=> console.log("server started listening at " + port));
}
export default server
