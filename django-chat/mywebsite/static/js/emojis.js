let emojibtn = document.getElementById('emojisbtn')
let emojiscont = document.getElementById('emojis-container')
let emojisbox = document.getElementById('emojis-box')

$( "#emojisbtn" ).click(function() {
    $( "#emojis-container" ).toggle();
  });


const emojis = [
    {   
    "lista":["๐","๐","๐","๐","๐","๐","๐คฃ","๐","๐","๐","๐","๐","๐","๐ฅฐ","๐","๐คฉ","๐","๐","๐","๐"],
    "nombre":"cat1"
    },
    {
    "lista":["๐","๐","๐","๐คช","๐","๐ค","๐ค","๐คญ","๐คซ","๐ค","๐ค","๐คจ","๐","๐","๐ถ","๐","๐","๐","๐ฌ","๐คฅ"],
    "nombre":"cat2"
    },
    {
    "lista":["๐","๐","๐ช","๐คค","๐ด","๐ท","๐ค","๐ค","๐คข","๐คฎ","๐คง","๐ฅต","๐ฅถ","๐ฅด","๐ต","๐คฏ","๐ค ","๐ฅณ","๐","๐ค"],
    "nombre":"cat3"
    },
    {
    "lista":["๐ง","๐","๐","๐","โน๏ธ","๐ฎ","๐ฏ","๐ฒ","๐ณ","๐ฅบ","๐ฆ","๐ง","๐จ","๐ฐ","๐ฅ","๐ข","๐ญ","๐ฑ","๐","๐ฃ"],
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