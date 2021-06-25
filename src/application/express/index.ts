import Express from 'express';
import routers from './api';
import errorHandler from './error';
import { config } from '../../dependency/config';

const server = Express();
const port = config.server.port;
    
server.use(Express.json())

server.use('/api', routers);

server.use(errorHandler)

if (require.main === module) {
    server.listen(port, ()=> console.log("server started listening at " + port));
}
export default server
