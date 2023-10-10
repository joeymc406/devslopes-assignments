// PART 1
const users = [
  { name: "Bobby", hobby: "Skateboarding" },
  { name: "Kyle", hobby: "Music" },
  { name: "Sarah", hobby: "Hang-gliding" },
  { name: "Jose", hobby: "Snowboarding" },
  { name: "Phillip" },
  { name: "Charles", hobby: "Rock Climbing" },
  { name: "Tabatha", hobby: "Art" },
];

function logUser(user) {
    if (!user.hobby) {
        console.log(`HI, ${user.name}`)
    } else {
        console.log(`Hi, ${user.name}. I'm stoked you enjoy ${user.hobby}`);
    }
}

users.forEach(user => {
  logUser(user);
});

console.log("Hello World");







// PART 2
let userInputCelsius = "100";
let degreesK = Number(userInputCelsius) + 273.15;

console.log('Degrees Kelvin:', degreesK); // Expected: 373.15