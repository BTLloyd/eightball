let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = true;
let runnerAge = 18;


if (earlyRegister && runnerAge > 18) {
  raceNumber + 1000;
}

if (runnerAge > 18 && earlyRegister) {
  console.log('Your running time is 9:30am and your race number is ' + raceNumber);
} else if (runnerAge > 18 && !earlyRegister) {
  console.log('Your running time is 11:00am and your race number is ' + raceNumber);
} else if (runnerAge < 18) {
  console.log('Your running time is 12:30pm and your race number is ' + raceNumber);
} else {
  console.log('Please see the registration desk');
};