function contains(obj, value) {
  for (const objValue of Object.values(obj)) {
    console.log(objValue);
    if (typeof objValue === "object") {
      return contains(objValue, value);
    }

    if (objValue === value) {
      return true;
    }
  }
  return false;
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

console.log(contains(nestedObject, 44));