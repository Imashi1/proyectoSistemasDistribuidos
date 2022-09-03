let url = `ws://${window.location.host}/ws/socket-server/`

const chatSocket = new WebSocket(url)

chatSocket.onmessage = function(e){
    let data = JSON.parse(e.data)
    let user = document.getElementById('username')
    console.log('Data:', data)

    if(data.type === 'chat'){
        let messages = document.getElementById('messages')

        messages.insertAdjacentHTML('beforeend', `<div>
                                <p>${user.textContent}: ${data.message}</p>
                            </div>`)
    }
}

let form = document.getElementById('form')
form.addEventListener('submit', (e)=> {
    e.preventDefault()
    let message = e.target.message.value 
    chatSocket.send(JSON.stringify({
        'message':message
    }))
    form.reset()
})
