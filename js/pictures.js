import { Photo_Description } from './data.js';
import { show } from './full-photo.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const anotherPicture = (picture) => {
  const pictureDescription = pictureTemplate.cloneNode(true);

  pictureDescription.querySelector('.picture__img').src = picture.url;
  pictureDescription.querySelector('.picture__likes').textContent = picture.likes;
  pictureDescription.querySelector('.picture__comments').textContent = picture.comments.length;

  pictureDescription.addEventListener('click', (evt) => {
    evt.preventDefault();
    show(picture);
  });

  return pictureDescription;
};

const anotherPictures = () => {
  let picturesContainerFragment = document.createDocumentFragment();

  Photo_Description.forEach((photo) => {

    picturesContainerFragment.appendChild(anotherPicture(photo));
  });

  picturesContainer.appendChild(picturesContainerFragment);
};

export { anotherPictures };
