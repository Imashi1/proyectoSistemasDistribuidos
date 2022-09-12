let url = `ws://${window.location.host}/ws/socket-server/`
user = document.getElementById('username')
console.log("usuario" + user.textContent);
const chatSocket = new WebSocket(url)

chatSocket.onmessage = function(e){
    let data = JSON.parse(e.data)
    

    console.log('Data:', data)

    if(data.type === 'chat'){
        let messages = document.getElementById('messages')

        messages.insertAdjacentHTML('beforeend', `<div>
                                <p>${data.message}</p>
                            </div>`)
    }
}

let form = document.getElementById('form')
form.addEventListener('submit', (e)=> {
    e.preventDefault()
    let message = user.textContent + ":" + e.target.message.value 
    chatSocket.send(JSON.stringify({
        'message':message
    }))
    form.reset()
})
