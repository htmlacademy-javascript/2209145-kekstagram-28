//1. Функция для проверки длины строки

const isLessOrEqual = (string, length) => string.length <= length;
isLessOrEqual('проверяемая строка', 20);

/*console.log(isLessOrEqual('проверяемая строка', 20)); // Результат: true - строка проходит по длине
console.log(isLessOrEqual('проверяемая строка', 18)); // Результат: true - строка проходит по длине
console.log(isLessOrEqual('проверяемая строка', 10)); // Результат: false — строка не проходит */


//2. Функция для проверки, является ли строка палиндромом

const isPalindrome = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  return string === [...string].reverse().join('');
};
isPalindrome('Лёша на полке клопа нашёл ');
/*console.log(isPalindrom('топот')); // Результат: true - строка является палиндромом
console.log(isPalindrom('ДовОд')); // // Результат: true - это палиндром
console.log(isPalindrom('Кекс')); // Результат: false - это не палиндром
console.log(isPalindrom('Лёша на полке клопа нашёл ')); // Результат: true - это палиндром */


//3. Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа

function extractNumbers (string) {
  string = string.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
}
extractNumbers('1 кефир, 0.5 батона');

/*console.log(extractNumber('2023 год')); // Результат: число 2023
console.log(extractNumber('ECMAScript 2022')); // Результат: число 2022
console.log(extractNumber('1 кефир, 0.5 батона')); // Результат: число 105
console.log(extractNumber('а я томат')); // Результат: NaN
console.log(extractNumber(2023)); // Результат: число 2023
console.log(extractNumber(-1)); // Результат: число 1
console.log(extractNumber(1.5)); // Результат: число 15 */


//4. Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины

const myPadStart = (source, count, addition) => {
  if (source.length >= count) {
    return source;
  }
  const preffixLength = count - source.length;
  const sample = addition;
  addition = '';
  while (addition.length < preffixLength - sample.length) {
    addition += sample;
  }
  return sample.slice(0, preffixLength - addition.length) + addition + source;
};
myPadStart('qwerty', 4, '0');

/*console.log(myPadStart('1', 2, '0')); // Результат: строка '01'
console.log(myPadStart('1', 4, '0')); // Результат: строка '0001'
console.log(myPadStart('q', 4, 'werty')); // Результат: строка 'werq'
console.log(myPadStart('q', 4, 'we')); // Результат: строка 'wweq'
console.log(myPadStart('qwerty', 4, '0')); // Результат: строка 'qwerty' */
