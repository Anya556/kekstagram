let getRundomFunction = (min, max) => {
  if(min < 0 || max < min || max === min) {
    return -1;
  }
  return Math.floor(Math.random() * (max- min + 1)) + min;
}
//console.log(getRundomFunction(1, 3));



let getMaxLength = (string, maxLength) => {
  return string.length <= maxLength;
};

getMaxLength('Hkjjkhk;k;l klijljd', 150);

const DESCRIPTIONS = [
  'Самая красивая моя фотография!',
  'Моя лучшая поза.',
  'Это я когда просыпаюсь.',
  'Фото на память обо мне',
  'Прекрасно выгляжу',
  'Посмотрите на меня',
];

const Likes = {
  MIN: 15,
  MAX: 200,
}

let CommentsCounter = {
  MIN: 1,
  MAX: 7,
};
const CommentsID = {
  MIN: 1,
  MAX: 100,
};

let AvatarNumber = {
  MIN: 1,
  MAX: 6,
}

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Алан',
  'Ирина',
  'Алекс',
  'Арина',
  'Даниил',
  'Юрий',
];


const getRandomArrayElement = (elements) => {
  return elements[getRundomFunction(0, elements.length - 1)];
};

const createComments = () => {
  const comments = [];

  for (let j = 0; j < getRundomFunction(CommentsCounter.MIN, CommentsCounter.MAX); j++) {
    comments.push({
      id: getRundomFunction(CommentsID.MIN, CommentsID.MAX),
      avatar: 'img/avatar-' + getRundomFunction(AvatarNumber.MIN, AvatarNumber.MAX) + '.svg',
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    });
  }
  return comments;
};

const PHOTO_DESCRIPTION = [];
const PhotoCount = {
  MIN: 1,
  MAX: 25,
};

const createPhotoDescription = () => {
  for (let i = PhotoCount.MIN; i <= PhotoCount.MAX; i++) {
    PHOTO_DESCRIPTION.push({
      id: i,
      url: 'photos/'+ i + '.jpg',
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRundomFunction(Likes.MIN, Likes.MAX),
      comments: createComments(),
    });
  }
};

createPhotoDescription();

