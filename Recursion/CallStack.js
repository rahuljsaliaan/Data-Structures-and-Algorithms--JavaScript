function takeShower() {
  return "Showering...!";
}

function eatBrakeFast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  console.log(takeShower());
  console.log(eatBrakeFast());
  console.log("Ok ready to go to work...!");
}

wakeUp();
