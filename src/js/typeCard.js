export default function checkPaymentSystem(cardNum) {
    const arrMaster = ['1', '2', '3', '4', '5'];
    const arrMaestro = ['0', '6', '7', '8'];
    if (cardNum[0] === '2') {
      return 'mir';
    } if (cardNum[0] === '4') {
      return 'visa';
    } if (cardNum[0] === '5' && arrMaster.includes(cardNum[1])) {
      return 'master';
    } if (cardNum[0] === '5' && arrMaestro.includes(cardNum[1])) {
      return 'maestro';
    }
    return false;
  }