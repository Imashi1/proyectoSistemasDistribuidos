let emojibtn = document.getElementById('emojisbtn')
let emojiscont = document.getElementById('emojis-container')
let emojisbox = document.getElementById('emojis-box')

$( "#emojisbtn" ).click(function() {
    $( "#emojis-container" ).toggle();
  });


const emojis = [
    {   
    "lista":["😀","😃","😄","😁","😆","😅","🤣","😂","🙂","🙃","😉","😊","😇","🥰","😍","🤩","😘","😗","😚","😙"],
    "nombre":"cat1"
    },
    {
    "lista":["😋","😛","😜","🤪","😝","🤑","🤗","🤭","🤫","🤔","🤐","🤨","😐","😑","😶","😏","😒","🙄","😬","🤥"],
    "nombre":"cat2"
    },
    {
    "lista":["😌","😔","😪","🤤","😴","😷","🤒","🤕","🤢","🤮","🤧","🥵","🥶","🥴","😵","🤯","🤠","🥳","😎","🤓"],
    "nombre":"cat3"
    },
    {
    "lista":["🧐","😕","😟","🙁","☹️","😮","😯","😲","😳","🥺","😦","😧","😨","😰","😥","😢","😭","😱","😖","😣"],
    "nombre":"cat4"
    }


    
]
/*
emojibtn.addEventListener('click', (e) =>{
    emojiscont.style.display = 'grid'     
    $( "#emojis-container" ).toggle();
})
*/



const divBotones = document.createElement("div");
divBotones.id="botonesEmojis";

emojis.forEach(categoria =>{    
    emojisbox.appendChild(divBotones);
    divBotones.insertAdjacentHTML('beforeend',`
    <button id="emojiCategoria" type="button" class="${categoria.nombre} btnCategoria" onClick="verCategoria('${categoria.nombre}')">
    ${categoria.nombre}
    </button>`)
});

emojis.forEach(categoria =>{
    const divCategoria = document.createElement("div");
    divCategoria.id=categoria.nombre;
    divCategoria.classList.add("categoria");
    divCategoria.style.display = 'none';

    emojisbox.appendChild(divCategoria);

    categoria.lista.forEach(emoji => {
        divCategoria.insertAdjacentHTML('beforeend',`
        <button id="emoji" type="button"  onClick="handleEmoji(' ${emoji}')">
        
        ${emoji}
        
        </button>`)
    });
});

$(`.${emojis[0].nombre}`).css("background-color", "lightblue");
$(`#${emojis[0].nombre}`).show();