//change the text

var element=document.getElementById('main_text');
element.innerHTML='New value of Main Page';


//Move the Image

var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft + 10;
    img.style.marginLeft=marginLeft+'px';
}

img.onClick=function(){
    var interval=setInterval(moveRight,100);
   // img.style.marginLeft='100px';
};