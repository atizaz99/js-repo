const user = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 30,
    fullName: function(){
        return this.firstName + " " + this.lastName; // using 'this' keyword to access object properties
    }
    
}
console.log(user.fullName());