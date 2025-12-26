const mark = 109;

let result;

switch(true){
    case mark >= 90:
        result = "Excellent";
        break;
    case mark >=80:
        result = 'Very Good';
        break;
    case mark >= 70:
        result = 'Good';
        break;
    
    case mark >40:
        result = 'Pass';
        break;
    default:
        result = 'Fail';
        break;
}

console.log(`Your result is '${result}'`)

