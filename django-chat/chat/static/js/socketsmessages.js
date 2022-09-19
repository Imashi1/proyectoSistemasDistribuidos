let url = `ws://${window.location.host}/ws/socket-server/`
user = document.getElementById('username')
console.log("usuario" + user.textContent);
const chatSocket = new WebSocket(url)

chatSocket.onmessage = function(e){
    let data = JSON.parse(e.data)
    mensaje = data.message

    console.log('Data:', data)

    if(data.type === 'chat'){
        let messages = document.getElementById('messages')

        messages.insertAdjacentHTML('beforeend', `<div id="${mensaje.uuid}">
                                <p> <span>${mensaje.author}</span> <br>${mensaje.text} <span class="date"><a href="aEliminar/${mensaje.uuid}" class="btnEliminar">Eliminar</a> ${mensaje.published_date}</span> </p>
                                
                            </div>`)
        messages.scrollTop = messages.scrollHeight
    }
}

let form = document.getElementById('form')
form.addEventListener('submit', (e)=> {
    e.preventDefault()
    let message = user.textContent + ":\t" + e.target.message.value
    
    chatSocket.send(JSON.stringify({
        'message':message,
    }))
    form.reset()
})
