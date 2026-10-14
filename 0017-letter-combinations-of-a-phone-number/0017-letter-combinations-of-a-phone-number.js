const letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }
  const phoneMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let result = [];

  function backtrack(index, current) {
    if (index === digits.length) {
      result.push(current);
      return
    }

    for (let char of phoneMap[digits[index]]) {
      backtrack(index + 1, current + char);
    }
  }
  backtrack(0, "");
  return result;
};