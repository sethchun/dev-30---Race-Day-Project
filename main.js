let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = true;
let runnerAge = 25;

if (runnerAge > 18 && earlyRegistration === true) {
    raceNumber += 1000;
}

if (runnerAge > 18 && earlyRegistration === true) {
    console.log(`Runner ${raceNumber} will race at 9:30AM`);
} else if (runnerAge > 18 && earlyRegistration === false) {
    console.log(`Runner ${raceNumber} will race at 11:00AM`);
} else {
    console.log('Youth registrants run at 12:30PM');
}

// Code Block for handling runners who are exactly 18:
// if (runnerAge > 18 && earlyRegistration === true) {
//     console.log(`Runner ${raceNumber} will race at 9:30AM`);
// } else if (runnerAge > 18 && earlyRegistration === false) {
//     console.log(`Runner ${raceNumber} will race at 11:00AM`);
// } else if (runnerAge < 18) {
//     console.log('Youth registrants run at 12:30PM');
// } else {
//     console.log('Please see registration desk.');
// }
