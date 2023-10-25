const sumOfArray = (nums) => {
  return nums.reduce((a, b) => a + b, 0);
};

console.log(sumOfArray([]));
console.log(sumOfArray([1, 5.2, 4, 0, -1]));
