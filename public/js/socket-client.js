
//referencias de HTML
const lblOnline= document.querySelector('#lblOnline')
const lblOffline= document.querySelector('#lblOffline')

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');









//toda configuracion y comunicacion entre cliente y servidor por sockets


const socket = io()


//On son eventos, son como listener, siempre oyen ante connect o disconect
socket.on('connect', () => {
    console.log('Conectado')

    lblOffline.style.display = 'none'
    lblOnline.style.display = ''


})


socket.on('disconnect', () => {
    console.log('Desconectado')

    lblOnline.style.display = 'none'
    lblOffline.style.display = ''

})

socket.on('enviar-mensaje', (payload) => {
    console.log(payload)
})

btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123',
        fecha: new Date().getTime()
    };

//emit emite mensaje desde el socket(/cliente) al servidor
    socket.emit('enviar-mensaje', payload, (id)=>{
        console.log('desde el server' +id);
    });

})