import { isEscEvent } from './util.js';
import { effectLevel, lastClass} from './effects.js';


const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
};

const uploadInput = document.querySelector('#upload-file');
const body = document.querySelector('body');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeUploadPicture = document.querySelector('#upload-cancel');

//open window
uploadInput.addEventListener('change', () => {
  resetSettings();
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keyup', onEscapeEvent);
  closeUploadPicture.addEventListener('click', () => {
    closeModal();
  });
});

//close window
const closeModal = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadInput.value = '';
};

const onEscapeEvent = (evt) =>{
  if(isEscEvent(evt)) {
    closeModal();
    document.removeEventListener('keyup', onEscapeEvent);
  }
};

//Resize an image
const buttonMinus = uploadOverlay.querySelector('.scale__control--smaller');
const buttonPlus = uploadOverlay.querySelector('.scale__control--bigger');
const scaleValue = uploadOverlay.querySelector('.scale__control--value');
const imagePreview = uploadOverlay.querySelector('.img-upload__preview > img');

const resetSettings = () => {
  imagePreview.style = 'transform: scale(1.00)';
  imagePreview.style.filter = '';
  if (lastClass) {
    imagePreview.classList.remove(lastClass);
  }

  scaleValue.value = '100%';
  effectLevel.classList.add('visually-hidden');
};

buttonPlus.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value, 10) + Scale.STEP;

  if (scale >= Scale.MAX){
    scale = Scale.MAX;
  }

  scaleValue.value = scale + '%';
  scale = scale / 100;
  imagePreview.style.transform = 'scale(' + scale +')';
});

buttonMinus.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value, 10) - Scale.STEP;

  if (scale <= Scale.MIN) {
    scale = Scale.MIN;
  }
  scaleValue.value = scale + '%';
  scale = scale / 100;
  imagePreview.style.transform = 'scale(' + scale +')';
});


