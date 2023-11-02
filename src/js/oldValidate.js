export default function validate() {
  const button = document.querySelector(".button");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    const numberCard = document.querySelector(".input");

    console.log(isValid(numberCard.value));

    const resultDiv = document.querySelector(".result");

    if (isValid(numberCard.value)) {
      resultDiv.innerHTML = "Номер валиден";
    } else {
      resultDiv.innerHTML =
        '<span style="color: red;" >Номер не валиден </span>';
    }
  });
}

export function isValid(cardNumber) {
  // Удаляем пробелы из номера карты
  cardNumber = cardNumber.replace(/\s/g, "");

  // Проверяем, что номер карты состоит только из цифр
  if (!/^\d+$/.test(cardNumber)) {
    return false;
  }

  // Проверяем, что номер карты имеет длину от 13 до 19 символов
  if (cardNumber.length < 13 || cardNumber.length > 19) {
    return false;
  }

  // Применяем алгоритм Луна для проверки контрольной суммы
  let sum = 0;
  for (let i = 0; i < cardNumber.length; i++) {
    let digit = parseInt(cardNumber.charAt(i));
    if (i % 2 === cardNumber.length % 2) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  if (sum % 10 !== 0) {
    return false;
  }

  // Все проверки пройдены, номер карты валиден
  return true;
}
