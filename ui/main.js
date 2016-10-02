
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
  counter++;
  document.getElementById('count').innerHTML=counter;
};