const generateButton = document.querySelector(`.generate-button`);
const passwordBox = document.getElementById(`password`);
const copyImage = document.querySelector(`.copy-image`);
const length = 12;
const upperCase = [
  `A`,
  `B`,
  `C`,
  `D`,
  `E`,
  `F`,
  `G`,
  `H`,
  `I`,
  `J`,
  `K`,
  `L`,
  `M`,
  `N`,
  `O`,
  `P`,
  `Q`,
  `R`,
  `S`,
  `T`,
  `U`,
  `V`,
  `W`,
  `X`,
  `Y`,
  `Z`,
];
const lowerCase = [
  `a`,
  `b`,
  `c`,
  `d`,
  `e`,
  `f`,
  `g`,
  `h`,
  `i`,
  `j`,
  `k`,
  `l`,
  `m`,
  `n`,
  `o`,
  `p`,
  `q`,
  `r`,
  `s`,
  `t`,
  `u`,
  `v`,
  `w`,
  `x`,
  `y`,
  `z`,
];
const numbers = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];
const symbles = [
  `@`,
  `#`,
  `$`,
  `%`,
  `^`,
  `&`,
  `*`,
  `(`,
  `)`,
  `_`,
  `+`,
  `~`,
  `{`,
  `}`,
  "`",
  `[`,
  `]`,
  `<`,
  `>`,
  `?`,
  `/`,
  `=`,
  `"`,
];
const allSymbles = upperCase + lowerCase + numbers + symbles;
//console.log(allSymbles);
//console.log(allSymbles[Math.floor(Math.random() * allSymbles.length)]);
//console.log(symbles[Math.floor(Math.random() * symbles.length)]);

generateButton.addEventListener(`click`, () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbles[Math.floor(Math.random() * symbles.length)];
  //console.log(password);
  while (password.length < length) {
    password += allSymbles[Math.floor(Math.random() * allSymbles.length)];
  }
  //console.log(password.length);
  passwordBox.value = password;
});
copyImage.addEventListener(`click`, () => {
  passwordBox.select();
  document.execCommand(`copy`);
});
