
var button = document.getElementById('counter');
var counter = 0;
var display= document.getElementById('count');

button.onclick = function(){
  counter++;
 display.innerHTML=counter.toString();
};