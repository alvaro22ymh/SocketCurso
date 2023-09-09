require('dotenv').config()
const express = require('express')
const cors = require('cors');

const { socketController } = require('../sockets/controller');


class Server {

    constructor(){
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);
            
    
    
        //middelwares
        this.middelwares();
        //rutas de mi app
        this.routes();

        //Sockets
        this.sockets();
    }


    
      

    middelwares(){
        //directorio publico
        this.app.use(express.static('public'))

       
        //CORS
        this.app.use(cors());

        
    }

    routes() {        
        
    }

    listen(){
        this.server.listen(this.port, () => {
            console.log('listening on port ' + this.port)
        }) 
    }



    sockets(){
        this.io.on('connection', socketController)
    }
}

module.exports = Server;