function circleArea(r) {
  let area = (Math.PI * r) ^ 2;
  console.log("Area is: " + area);
}

function circleCircumference(r) {
  let circ = 2 * Math.PI * r;
  console.log("Circumference is: " + circ);
}

module.exports = {
  circleArea,
  circleCircumference,
};
