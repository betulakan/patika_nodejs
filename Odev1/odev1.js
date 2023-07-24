const radius = process.argv.slice(2);
const pi = Math.PI;

function findArea(rad) {
  let area = pi * radius ** 2;
  return console.log(`Yarıçapı ${rad} olan dairenin alanı: ${area}`);
}

findArea(radius[0] * 1);
