const arr = [1, 3, 5, 2, 1, 6, 8, 1, 4, 1, 2, 5, 1, 5, 9, 3, 14, 14, 9]

const count = {}

arr.map(a =>{
    if (a in count){
        count[a] +=1
    }
    else{
        count[a] = 1
    }

});

console.log(count)
// for case 
const forCount = {}
arr.forEach(a =>{
    forCount[a] = (forCount[a] || 0) +1;
})
console.log(forCount)

const frequencyNubmers = Object.entries(forCount).filter(([num, freq]) => { return num % 2 === 0; });
console.log(frequencyNubmers)

