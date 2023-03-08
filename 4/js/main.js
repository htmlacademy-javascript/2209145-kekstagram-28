const PHOTO_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_COUNT_MIN = 15;
const LIKE_COUNT_MAX = 200;
const COMMENT_COUNT_MAX = 3;


const DESCRIPTIONS = [
  'С друзьями',
  'На природе',
  'Всем привет!',
  'На море',
  'В горах',
  'Дома',
];

const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Илья',
  'Игорь',
  'Антон',
  'Александр',
  'Даниил',
  'Дарья',
  'Наталья',
  'Елена',
  'Анастасия',
  'Татьяна',
];

/* Вспомогательные функции */
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generatePhotoId = createIdGenerator();
const generatePhotoNumber = createIdGenerator();
const generateCommentId = createRandomIdFromRangeGenerator(1, 999);

const generateMessage = () =>
  Array.from({length: getRandomInteger(1, 2)}, () => getRandomArrayElement(COMMENT_LINES)).join(' ');


const generateComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: generateMessage(),
  name: getRandomArrayElement(NAMES),
});

const generatePhotoDescription = () => {
  const commentCount = getRandomInteger(1, COMMENT_COUNT_MAX);
  const photoComments = Array.from({length: commentCount}, generateComment);

  return {
    id: generatePhotoId(),
    url: `photos/${generatePhotoNumber()}'.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(LIKE_COUNT_MIN, LIKE_COUNT_MAX),
    comments: photoComments,
  };
};

const generatePhotos = () => Array.from({length: PHOTO_COUNT}, generatePhotoDescription);

generatePhotos();
