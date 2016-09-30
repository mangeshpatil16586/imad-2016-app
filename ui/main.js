/*//change the text

var element=document.getElementById('main_text');
element.innerHTML='New value of Main Page';


//Move the Image

var img=document.getElementById('madi');
var marginLeft=0;

function moveRight(){
    marginLeft=marginLeft + 1;
    img.style.marginLeft=marginLeft+'px';
}

img.onClick=function(){
    var interval=setInterval(moveRight,50);
   // img.style.marginLeft='100px';
}; */

var buttonClick=document.getElementById('counter');
var counter=0;

buttonClick.onClick=function(){
    
    var request=new XMLHttpRequest();
    
  //Make a request To counter endPoint
  
  
  //Capture the response and store it in a veriable
  
  //render the veriable
  
  counter=counter+1;
  var span=document.getElementById('count');
  span.innerHtml=counter.toString();
};