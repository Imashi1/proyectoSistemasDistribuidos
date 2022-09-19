function verCategoria(categoria){
    $(".categoria").hide();
    $(`#${categoria}`).show();

    $(".btnCategoria").css("background-color", "white");
    $(`button.${categoria}`).css("background-color", "lightblue");
    

}
function handleEmoji(emoji){
    var msg = document.getElementById('msg')
    msg.value = msg.value + emoji
    emojiscont.style.display = 'none'
}

$(document).mousedown(function(e){
var container = $("#emojis-container");

if (!container.is(e.target) && container.has(e.target).length === 0) 
{
    container.hide();
}
});

//set the scrollbar up to bottom of the div
var objDiv = document.getElementById("messages");
objDiv.scrollTop = objDiv.scrollHeight;