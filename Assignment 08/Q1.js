let isDate = function (input) {
    if (Object.prototype.toString.call(input) === "[object Date]")
      return true;
    return false;
  };
  console.log(isDate("April 14, 2020 11:15:00"));
  console.log(isDate(new Date(96400000)));
  console.log(isDate(new Date(89, 5, 11, 10, 23, 20, 0)));
  console.log(isDate([1, 3, 5, 0]));