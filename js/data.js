import { getRundomFunction, getRandomArrayElement } from './util.js';

const PHOTO_MAX = 25;

const Likes = {
  MIN: 15,
  MAX: 200,
};

const CommentsID = {
  MIN: 1,
  MAX: 100,
};

let AvatarNumber = {
  MIN: 1,
  MAX: 6,
};

const descriptions = [
  'Самая красивая моя фотография!',
  'Моя лучшая поза.',
  'Это я когда просыпаюсь.',
  'Фото на память обо мне',
  'Прекрасно выгляжу',
  'Посмотрите на меня',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const names = [
  'Алан',
  'Ирина',
  'Алекс',
  'Арина',
  'Даниил',
  'Юрий',
];
const CommentsCounter = {
  MIN: 1,
  MAX: 7,
};

const createComments = () => {
  const comments = [];

  for (let j = 0; j < getRundomFunction(CommentsCounter.MIN, CommentsCounter.MAX); j++) {
    comments.push({
      id: getRundomFunction(CommentsID.MIN, CommentsID.MAX),
      avatar: 'img/avatar-' + getRundomFunction(AvatarNumber.MIN, AvatarNumber.MAX) + '.svg',
      message: getRandomArrayElement(messages),
      name: getRandomArrayElement(names),
    });
  }
  return comments;
};
//console.log(createComments());

const Photo_Description = [];


const createPhotos = () => {
  for (let i = 0; i <= PHOTO_MAX; i++) {
    Photo_Description.push({
      id: i,
      url: 'photos/'+ (i+1) + '.jpg',
      description: getRandomArrayElement(descriptions),
      likes: getRundomFunction(Likes.MIN, Likes.MAX),
      comments: createComments(),
    });
  }
};
//console.log(Photo_Description);
export { createPhotos, Photo_Description };


