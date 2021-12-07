const obj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5
}
function swap(object) {
  const newObj = {};
  for (key in object) {
    newObj[object[key]] = key;
  } return newObj;
}

  console.log(swap(obj));