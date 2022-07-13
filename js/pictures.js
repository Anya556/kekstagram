import { Photo_Description } from './data.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const anotherPicture = ({ url, comments, likes  }) => {
  const pictureDescription = pictureTemplate.cloneNode(true);

  pictureDescription.querySelector('.picture__img').src = url;
  pictureDescription.querySelector('.picture__likes').textContent = likes;
  pictureDescription.querySelector('.picture__comments').textContent = comments.length;

  return pictureDescription;

};

const anotherPictures = () =>{
  let picturesContainerFragment = document.createDocumentFragment();

  Photo_Description.forEach((photo) => {
    picturesContainerFragment.appendChild(anotherPicture(photo));
  });

  picturesContainer.appendChild(picturesContainerFragment);
};

export { anotherPictures };
