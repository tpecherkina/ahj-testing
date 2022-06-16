export default function checkNumber(cardNum) {
  if (cardNum.length !== 16) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < cardNum.length; i += 1) {
    let num = Number(cardNum[i]);
    if (i % 2 === 0) {
      num *= 2;
      if (num > 9) {
        num -= 9;
      }
    }
    sum += num;
  }
  return sum % 10 === 0;
}
