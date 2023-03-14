const midgetTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createMidget = ({url, description, likes, comments}) => {
  const midget = midgetTemplate.cloneNode(true);

  midget.querySelector('.picture__img').src = url;
  midget.querySelector('.picture__img').alt = description;
  midget.querySelector('.picture__likes').textContent = likes;
  midget.querySelector('.picture__comments').textContent = comments.length;

  return midget;
};

const renderMidget = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const midget = createMidget(picture);
    fragment.append(midget);
  });

  container.append(fragment);
};

export{renderMidget};
