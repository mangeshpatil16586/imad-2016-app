//change the text

var element=document.getElementById('main_text');
element.innerHTML='New value of Main Page';


//Move the Image

var img=document.getElementById('madi');
img.onClick=function(){
    img.style.marginLeft='100px';
};