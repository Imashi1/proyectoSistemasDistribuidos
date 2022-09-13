let emojibtn = document.getElementById('emojisbtn')
let emojiscont = document.getElementById('emojis-container')
let emojisbox = document.getElementById('emojis-box')
document.addEventListener( "click", emojiListener );

const emojis = [
    "😀","😃","😄","😁","😆","😅","🤣","😂","🙂","🙃",
    "😉","😊","😇","🥰","😍","🤩","😘","😗","😚","😙",
    "😋","😛","😜","🤪","😝","🤑","🤗","🤭","🤫","🤔",
    "🤐","🤨","😐","😑","😶","😏","😒","🙄","😬","🤥",
    "😌","😔","😪","🤤","😴","😷","🤒","🤕","🤢","🤮",
    "🤧","🥵","🥶","🥴","😵","🤯","🤠","🥳","😎","🤓",
    "🧐","😕","😟","🙁","☹️","😮","😯","😲","😳","🥺",
    "😦","😧","😨","😰","😥","😢","😭","😱","😖","😣",
    "😞","😓","😩","😫","🥱"
]

emojibtn.addEventListener('click', (e) =>{
    console.log("Inside emoji function");
    emojiscont.style.display = 'grid'     
})

function emojiListener(event){
    var element = event.target
    if(element.id == 'emoji'){
        var msg = document.getElementById('input_msg')
        console.log();
        msg.value = msg.value + element.textContent
        console.log(element.textContent);
        emojiscont.style.display = 'none'
        
    }
}

emojis.forEach(element => {
    emojisbox.insertAdjacentHTML('beforeend',`<button id="emoji">${element}</button>`)
});   