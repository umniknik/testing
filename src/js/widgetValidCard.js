import activeImgCard from "./activeImgCard";
import isValid from "./validate";

export default function widgetValidCard() {
  const button = document.querySelector(".button");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    const numberCard = document.querySelector(".input");

    console.log(isValid(numberCard.value));

    const resultDiv = document.querySelector(".result");

    if (isValid(numberCard.value)) {
      resultDiv.innerHTML = "Номер валиден";

      //Запускаем функцию активации картинки соответствующей типу карты
      let cardImg = null;

      //Если какая-то карта уже активна, то убираем класс активности
      cardImg = document.querySelector(".active_card");
      if (cardImg) {
        cardImg.classList.remove("active_card");
      }

      cardImg = document.querySelector(activeImgCard(numberCard.value)); // с помощью функции activeImgCard находим картинку, которой надо прибавить класс активности и сохраняем её в cardImg

      cardImg.classList.add("active_card");
    } else {
      resultDiv.innerHTML =
        '<span style="color: red;" >Номер не валиден </span>';
    }
  });
}
