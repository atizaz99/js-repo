const fruitType = 'Bananas';

switch(fruitType){
    case "Oranges":
        console.log(`${fruitType} are $0.059 per pound.`);
        break;

    case 'Bananas':
        console.log(`${fruitType} are $0.09 per pound.`);
        break;

    default:
        console.log(`Sorry, We are out of ${fruitType}.`);
        break;
}

