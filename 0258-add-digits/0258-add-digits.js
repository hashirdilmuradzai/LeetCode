function addDigits(digit) {
  if (digit < 10) return digit;

  let first = Math.floor(digit / 10);
  let last = digit % 10;

  let result = first + last;

  return addDigits(result);
}