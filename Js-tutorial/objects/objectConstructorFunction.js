function Person(fname, lname, age){
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.fullName = function()
    {
        return this.firstName + " " + this.lastName;
    }
}

const person1  = new Person("Alice", "Johnson", 30);
const person2 = new Person("Bob", "Smith", 25);
console.log('Person 1 Full Name: ' + person1.fullName());
console.log('Person 2 Object2 ' + JSON.stringify(person2));