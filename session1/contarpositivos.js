function countPositivesSumNegatives(input) {
    if(!input || input == null) return []
    let sumNegative = input.reduce((acc, number) => number < 0 ? acc + number : acc, 0);
    let sumPositive = input.reduce((acc, number) => number > 0 ? acc + 1 : acc, 0);
  
    if(sumPositive == 0 && sumNegative == 0) {
      return []
    }
  
    return [sumPositive, sumNegative];
  }
  
  const result = countPositivesSumNegatives([1,2,-1, -2, -3]);
  console.log(result);