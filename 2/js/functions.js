//1. Функция для проверки длины строки

const isLessOrEqual = (string, length) => string.length <= length;

/*console.log('Функция для проверки длины строки');
console.log(isLessOrEqual('проверяемая строка', 20)); // Результат: true - строка проходит по длине
console.log(isLessOrEqual('проверяемая строка', 18)); // Результат: true - строка проходит по длине
console.log(isLessOrEqual('проверяемая строка', 10)); // Результат: false — строка не проходит */


//2. Функция для проверки, является ли строка палиндромом

const isPalindrom = (string) => {
  const tempString = string
    .toLowerCase ()
    .replaceAll(' ', '');
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
}


/*console.log(isPalindrom('топот')); // Результат: true - строка является палиндромом
console.log(isPalindrom('ДовОд')); // // Результат: true - это палиндром
console.log(isPalindrom('Кекс')); // Результат: false - это не палиндром
console.log(isPalindrom('Лёша на полке клопа нашёл ')); // Результат: true - это палиндром */


//3. Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа

const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
}

/*console.log(extractNumber('2023 год')); // Результат: число 2023
console.log(extractNumber('ECMAScript 2022')); // Результат: число 2022
console.log(extractNumber('1 кефир, 0.5 батона')); // Результат: число 105
console.log(extractNumber('а я томат')); // Результат: NaN
console.log(extractNumber(2023)); // Результат: число 2023
console.log(extractNumber(-1)); // Результат: число 1
console.log(extractNumber(1.5)); // Результат: число 15 */


//4. Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
}

/*console.log(myPadStart('1', 2, '0')); // Результат: строка '01'
console.log(myPadStart('1', 4, '0')); // Результат: строка '0001'
console.log(myPadStart('q', 4, 'werty')); // Результат: строка 'werq'
console.log(myPadStart('q', 4, 'we')); // Результат: строка 'wweq'
console.log(myPadStart('qwerty', 4, '0')); // Результат: строка 'qwerty' */
