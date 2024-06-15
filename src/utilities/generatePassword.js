let leetSpeakList = {
  a: ['4', '@', 'Д', 'α', 'λ', '∆'],
  d: ['[)', '|}', '|)', 'cl', 'c1', 'Ð'],
  k: ['|{', 'l<', '1<', '|<', '|('],
  m: ['[V]', '(V)', '1v1', ']V[', '|V|', 'AA', '^^', '|Y|', 'м'],
  n: ['И', '/V', 'ท', 'п'],
  r: ['Я', '®'],
  v: ['Ṽ', 'Ṿ', 'ⓥ'],
};

let generatePassword = (
  isDictOptimized,
  isBothOptimized,
  isUppercased,
  isLeeted,
  isDoubled
) => {
  let password = isDoubled ? 'aardvarkaardvark' : 'aardvark';
  if (isBothOptimized) {
    let midAlphabet = ['m', 'n'];
    password = midAlphabet[Math.round(Math.random())] + password;
  } else if (isDictOptimized) {
    password = 'z' + password;
  }
  return password
    .split('')
    .map((digit, index) => {
      let replaceBank = [digit];
      if (isUppercased) {
        replaceBank.push(digit.toUpperCase());
      }
      if (index !== 0 && isLeeted && Math.random() < 0.34) {
        replaceBank = leetSpeakList[digit];
      }
      return digit.replace(
        digit,
        replaceBank[Math.floor(Math.random() * replaceBank.length)]
      );
    })
    .join('');
};

export default generatePassword;
