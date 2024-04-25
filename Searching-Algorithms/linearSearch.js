const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

// Linear Search

// NOTE: This is like a polyfill for indexOf method
const linearSearchPos = (array, key) => {
  for (let i = 0; i < array.length; i++) {  
    if (array[i] === key) return i;
  }

  return -1;
};

console.log(linearSearchPos(states, "Alabama")); // true
console.log(linearSearchPos(states, "alabama")); // false

// indexOf method
console.log(states.indexOf("Alabama"));

const linearSearchBool = (array, key) => {
  for (let i = 0; i < states.length; i++) {
    if (array[i] === key) return true;
  }

  return false;
};

console.log(linearSearchBool(states, "New York")); // true
console.log(linearSearchBool(states, "new york")); // false

// includes method
console.log(states.includes("New York")); // true
console.log(states.includes("new York")); // false
