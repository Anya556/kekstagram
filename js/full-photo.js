import { isEscEvent } from './util.js';
const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');

//hide the excess
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
commentsCount.classList.add('hidden');
commentsLoader.classList.add('hidden');

const onBigPictureCloseClick = () =>{
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  bigPictureClose.removeEventListener('click', onBigPictureCloseClick);
  commentList.innerHTML = '';
};

const onEscapeEvent = (evt) =>{
  if(isEscEvent(evt)){
    onBigPictureCloseClick();
    document.removeEventListener('keyup', onEscapeEvent);
  }
}

const commentTemplate = document.querySelector('.social__comment');
const commentList =document.querySelector('.social__comments');

const renderComment = (comment) =>{
  let commentSimilar = commentTemplate.cloneNode(true);
  commentSimilar.querySelector('.social__picture').src = comment.avatar;
  commentSimilar.querySelector('.social__picture').alt = comment.name;
  commentSimilar.querySelector('.social__text').textContent = comment.message;

  return commentSimilar;
}

const renderComments = (comments) => {
  let commentsListFragment = document.createDocumentFragment();

  comments.forEach(comment => {
    commentsListFragment.appendChild(renderComment(comment));
  });

  commentList.appendChild(commentsListFragment);
}

const show = (picture) => {
  body.classList.add('modal-open');
  bigPicture.querySelector('.big-picture__img > img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  bigPictureClose.addEventListener('click', onBigPictureCloseClick);
  
  document.addEventListener('keyup', onEscapeEvent);

  renderComments(picture.comments);

  bigPicture.classList.remove('hidden');
};

export {show};
