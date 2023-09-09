

const socketController = socket => {

        console.log('Cliente conectado', socket.id);

        socket.on('disconnect', () => {
            console.log('Cliente desconectado', socket.id);
        })

        //escucha por el evento emitido llamado enviarmensaje. El payload se refiere a los datos que se envían en el cuerpo de una solicitud HTTP, osea el mensaje
        socket.on('enviar-mensaje', (payload, callback) => {

            const id = 1234;
            callback(id)

            //Emitir mensaje desde el server al cliente(socket)
            //brodcast es para emitir ese mensaje a todos los clientes desde el server menos al que lo envio
            socket.broadcast.emit('enviar-mensaje', payload);
        })

    }

    module.exports = {
        socketController
    }