// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arr) {
  let highestValue = arr.sort(function (a, b) {
    return a - b;
  })[arr.length - 1];
  let counter = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === highestValue) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(rat, cat1, cat2) {
  let cat1Pos = Math.abs(cat1 - rat);
  let cat2Pos = Math.abs(cat2 - rat);
  if (cat1Pos < cat2Pos) {
    return 'cat1';
  }
  if (cat2Pos < cat1Pos) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function divisibleOnlyBy3(n) {
  if (n % 3 === 0 && n % 5 !== 0) {
    return true;
  }
  return false;
}

function divisibleOnlyBy5(n) {
  if (n % 3 !== 0 && n % 5 === 0) {
    return true;
  }
  return false;
}

function divisibleByBoth(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return true;
  }
  return false;
}

function fizzBuzzDivisions(n) {
  if (divisibleOnlyBy3(n)) {
    return 'fizz';
  }
  if (divisibleOnlyBy5(n)) {
    return 'buzz';
  }
  if (divisibleByBoth(n)) {
    return 'fizzBuzz';
  }
  return 'bug!';
}

function fizzBuzz(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i += 1) {
    res.push(fizzBuzzDivisions(arr[i]));
  }
  return res;
}

// Desafio 9
function encode(string) {
  let newString = string
    .replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
  return newString;
}

function decode(code) {
  let newCode = code
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return newCode;
}

// Desafio 10
function techList(arr, string) {
  if (arr.length === 0) {
    return 'Vazio!';
  }
  let list = [];
  arr.sort();
  for (let element of arr) {
    list.push({
      tech: element,
      name: string,
    });
  }
  return list;
}