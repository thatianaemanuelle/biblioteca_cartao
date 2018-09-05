function cardValidator(credNumber) {
  if (!credNumber) {
    throw new Error("Não tem nada no parametro.");
  }
  if (typeof credNumber === "string") {
    throw new Error("Esse tem uma string.");
  }
  if (credNumber.toString().length < 10) {
    throw new Error("Quantidade de numeros menor que o esperado.");
  }

  else {
    var sum = 0, even = false;
    var cardTest = String(credNumber).split("").reverse();
    cardTest.forEach(function (dstr) {
      var d = parseInt(dstr);
      sum += ((even = !even) ? d : (d < 5) ? d * 2 : (d - 5) * 2 + 1);
    });
    return (sum % 10 == 0);
  }
}

module.exports.cardValidator = cardValidator;