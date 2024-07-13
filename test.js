const generateFourDigitId = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

const uniqueId = generateFourDigitId();
console.log(uniqueId); // Example output: '4827'
