function flattenArray(arr) {
// we create a new array where we will push our values we will dig from the nested levels
  let newArray = [];

// we create a recursive function that will do the digging ;) if it finds array value to not be an array itself - it pushes it to our new array, else it calls itself to dig deeper
function recurseArray(arr) {
if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (!Array.isArray(arr[i])) {
        newArray.push(arr[i]);
      } else {
        recurseArray(arr[i]);
      }
    }
  }
}

// we run the function on our input array
recurseArray(arr);

// we return a new, flattened array
return newArray;
}
