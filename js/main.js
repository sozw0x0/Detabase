function LeapYear(year) {
  if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let checkYear = 2021; {
  if (LeapYear(checkYear)) {
    console.log(checkYear + '年はうるう年')
  } else {
    console.log(checkYear + '年はうるう年ではない')
  }
}

const array = [2, 4, 7, 5, 4, 3, 8]

const result = array.filter(function (x, i, self) {
  return self.indexOf(x) === i;
});

console.log(result);




