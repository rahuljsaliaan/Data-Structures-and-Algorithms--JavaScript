function collectStrings(obj) {
  let stringArray = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      stringArray.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      // stringArray.push(...collectStrings(obj[key]));
      stringArray = stringArray.concat(collectStrings(obj[key]));
    }
  }

  return stringArray;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj));
