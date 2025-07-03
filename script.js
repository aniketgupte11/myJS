console.log("Start");
setTimeout(function sTO() {
  console.log("Set Time Out");
}, 5000);
fetch("https://netflix.com/", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}).then(function myFetch() {
  console.log("Netflix");
});

console.log("End");

const radius = [1, 2, 3, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};
const circum = function (radius) {
  return 2 * Math.PI * radius;
};

const calcuate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log("Area" + calcuate(radius, area));
console.log("Circumference" + calcuate(radius, circum));
console.log("Diameter" + calcuate(radius, diameter));

function findSum(radius) {
  let sum = 0;
  for (let index = 0; index < radius.length; index++) {
    sum = sum + radius[index];
  }
  return sum;
}
console.log(findSum(radius));
