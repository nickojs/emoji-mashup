/*
  this is a shallow comparsion method that only work if both objects
  contains the same properties, on the same order

  its just for the current useEffect issue, this will be refactored
  later to a better object comparsion method
 */
export default (objA, objB) => {
  const objAString = JSON.stringify(objA);
  const objBString = JSON.stringify(objB);

  return objAString === objBString;
};
