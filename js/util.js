//A clear random number
let getRundomFunction = (min, max) => {
  if(min < 0 || max < min || max === min) {
    return -1;
  }
  return Math.floor(Math.random() * (max- min + 1)) + min;
}


//Checking the length of a string
let getMaxLength = (string, maxLength) => {
  return string.length <= maxLength;
};


//Random array element
const getRandomArrayElement = (elements) => {
  return elements[getRundomFunction(0, elements.length - 1)];
};

export { getRundomFunction, getMaxLength, getRandomArrayElement };
