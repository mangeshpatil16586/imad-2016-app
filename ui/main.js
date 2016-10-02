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

var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    
    
  //Make a request To counter endPoint
  
  
  //Capture the response and store it in a veriable
  
  //render the veriable
  counter=counter + 1; 
 var span1 = document.getElementById('count');
 span1.innerHTML = counter.toString();
  
};