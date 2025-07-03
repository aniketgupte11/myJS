/*console.log("Start");
setTimeout(function sTO() {
  // console.log("Set Time Out");
}, 5000);
fetch("https://netflix.com/", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}).then(function myFetch() {
  // console.log("Netflix");
});

//console.log("End");

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

//console.log("Area" + calcuate(radius, area));
//console.log("Circumference" + calcuate(radius, circum));
//console.log("Diameter" + calcuate(radius, diameter));

function findSum(radius) {
  let sum = 0;
  for (let index = 0; index < radius.length; index++) {
    sum = sum + radius[index];
  }
  return sum;
}
//console.log(findSum(radius));
*/
//-----------------------------------------------//

//Find the amplitude of the given array by finding the max and min templerates during the day//
// Day 1 array
const temperatures = [9, 12, 3, -3, 7, 22, "error", -4, -5, -8, 10];
//Day 2 of temperaturs
const temperatures2 = [33, 25, 1, 15, 22, -2, -4, "error", -10];

const finalTemperatures = temperatures.concat(temperatures2);
console.log(finalTemperatures);

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let curr = temps[i];
    if (typeof curr !== "number") continue;
    if (curr > max) max = curr;
    if (min > curr) min = curr;
  }
  console.log(`Max temp is ${max} and Min temp is ${min}`);

  return max - min;
};
const amplitude = calcTempAmplitude(finalTemperatures);
console.log(amplitude);
