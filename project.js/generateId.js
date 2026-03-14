const generateTrackingId = (text) =>{
    const year = new Date().getFullYear();
    const paddedCounter = String(text).padStart(6, '0');

    return `TRx-${year}-${paddedCounter}`
}

console.log(generateTrackingId(10))

const generateTrackingMultipleId = (counter) => {
    const year = new Date().getFullYear();
    const ids = [];
    for (let i = 0; i <=counter; i++){
        const padded = String(i).padStart(6, 'x');
        ids.push(`TRx-${year}-${padded}`)
    }
    return ids
}

console.log(generateTrackingMultipleId(12));

const generateTrackingArray = (limit) => {
    const year = new Date().getFullYear()
    return Array.from({length: limit}, (_, i) =>{

            const padded = String(i+1).padStart(6, '*');
            return `TRx-${year}-${padded}`;

    });
}

console.log(`Generate from Array ===== `)
console.log(generateTrackingArray(12))

const generateTrackingShortId = (num) =>{
    // if (typeof num !='number'){
    //     return `Error: Please provide a number...`
    // }
    if (!Number.isInteger(num)){
        return 'Error: Please provid a number '
    }
    if (num > 999999){
        return `The Number ${num} is exceed the limit  of 999999...`;

    }
    if (num < 0 ){
        return `Error: The Number can't be negative...`
    }
    const now = new Date();
    
    const year = now.getFullYear().toString();
    const month = String(now.getMonth() +1).padStart(2, '0');
    console.log(year);
    const shortYear = year.slice(-2);
    const padded = String(num).padStart(6, '0');

    return `VFx-${shortYear}-${month}-${padded}`;
}
console.log('VFx short id =====================')
console.log(generateTrackingShortId(45099009));
console.log(generateTrackingShortId('0iimm'));
console.log(generateTrackingShortId(-5));
console.log(generateTrackingShortId(89));
console.log(generateTrackingShortId(1.24))