// // // array random values between 0 and 500, length = 365
// const values = Array.from({ length: 365 }, () => Math.floor(Math.random() * 500) + 0);

// // // show all values
// console.log(values);

// // // min value
// console.log(`Min value: ${Math.min(...values)}`);

// // // max value
// console.log(`Max value: ${Math.max(...values)}`);

// // average from array
// const calcAverage = (arr) => {
//   let total = 0;
//   let count = 0;

//   arr.forEach(function(item, idx) {
//     total += item;
//     count ++;
//   });

//   return total / count;
// }

// console.log(Math.round(calcAverage(values)));

// daily billing
const dailyBilling = (startDate, endDate) => {
  const end = new Date(endDate);
  const curDate = new Date(startDate);
  let data = [];

  while (curDate <= end) {
    // checking for weekends
    if (curDate.getDay() !== 0 && curDate.getDay() !== 6) {
      const obj = {
        date: new Date(curDate).toLocaleDateString(),
        value: Math.floor(Math.random() * 500)
      };
      data.push(obj);
    }
    curDate.setDate(curDate.getDate() + 1);
  }

  return data;
}

const result = dailyBilling('2024-09-17', '2025-09-17');

// min value
const min = Math.min(...result.map(item => item.value));

console.log(`Min value: ${min}\n`);

// max value
const max = Math.max(...result.map(item => item.value));

console.log(`Max value: ${max}\n`);

// obj
console.log('Object:')
console.log(result);

// annual avg
const total = result.reduce((acc, item) => acc + item.value, 0);
const annualAvg = Math.round(total / result.length);

console.log(`\nAnnual average: ${annualAvg}\n`);

// above avg days
const aboveAvgDays = result.filter(item => item.value > annualAvg);

console.log(`Days|dailly billing > than the annual avg:\n`)
aboveAvgDays.forEach(el => {
  console.log(`Date: ${el.date}, Billing: ${el.value}`);
});

console.log('\n');