/*console.log(x===undefined); // True
var x = 3;

(function(){
    console.log(x) // undefined
    var x = 'Local Variable '

})();*/

var x;
console.log(x===undefined); // true
x = 3;
( function(){
    var x =5;
    console.log(x); // undefined
    var x = 'local variable'; 

})();

