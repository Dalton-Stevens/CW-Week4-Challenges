const hoopCount = (num) => {
  return num >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
};

console.log(hoopCount(10));
console.log(hoopCount(1));
console.log(hoopCount(15));
