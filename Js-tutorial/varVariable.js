/*
Var: Variable created with "Var" are not block-scoped
only local to the function (or global scope) that the block resides within

*/

if (true){
    var x = 5;
}

console.log(x) // x is 5


