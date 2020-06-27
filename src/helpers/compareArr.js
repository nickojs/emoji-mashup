// compares two arrays
export default (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    const areValuesEqual = arr1
      .sort()
      .every((value, index) => value === arr2[index]);
    return areValuesEqual;
  }
};
