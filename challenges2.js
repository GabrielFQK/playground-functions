// Desafio 11
function getNumber(arr) {
  let DDD = arr.slice(0, 2).join('');
  let numberPart1 = arr.slice(2, 7).join('');
  let numberPart2 = arr.slice(7, 12).join('');
  return `(${DDD}) ${numberPart1}-${numberPart2}`;
}

function countRepeatedNumber(arr) {
  const count = {};
  for (const number of arr) {
    if (count[number]) {
      count[number] += 1;
    } else {
      count[number] = 1;
    }
  }
  return count;
}

function checkRepeatedNumber(arr) {
  let count = countRepeatedNumber(arr);
  for (let number in count) {
    if (count[number] >= 3) {
      return true;
    }
  }
}

function checkNumberValue(arr) {
  for (const number of arr) {
    if (number < 0 || number > 9) {
      return true;
    }
  }
}

function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (checkRepeatedNumber(arr) || checkNumberValue(arr)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return getNumber(arr);
}

// Desafio 12
function triangleCheck(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] >= '0' && string[i] <= '9') {
      counter += Number(string[i]);
    }
  }
  if (counter > 1) {
    return `${counter} copos de água`;
  }
  return `${counter} copo de água`;
}