function sumTwoSmallestNumbers(numbers) {  
    const orderedNumbers = numbers.sort((a,b) => Number(a) - Number(b));
    
    return orderedNumbers[0] + orderedNumbers[1];
}

const result = sumTwoSmallestNumbers([1,2,3,4,5]);
console.log(result)
