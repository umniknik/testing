export default function activeImgCard() {
  const numberInput = document.getElementById("number_card");

  numberInput.addEventListener("input", () => {
    let cardImg = null;
    cardImg = document.querySelector(".active_card");

    //Если какая-то карта уже активна, то убираем класс активности
    if (cardImg) {
      cardImg.classList.remove("active_card");
    }

    switch (true) {
      case /^2/.test(numberInput.value): // if (x === 'value1')
        cardImg = document.querySelector('[data-type="МИР"]');
        cardImg.classList.add("active_card");
        break;

      case /^34/.test(numberInput.value):
        cardImg = document.querySelector('[data-type="American_express"]');
        cardImg.classList.add("active_card");
        break;

      case /^4/.test(numberInput.value):
        cardImg = document.querySelector('[data-type="VISA"]');
        cardImg.classList.add("active_card");
        break;

      case /^6/.test(numberInput.value):
        cardImg = document.querySelector('[data-type="Discover"]');
        cardImg.classList.add("active_card");
        break;

      default:
        break;
    }
  });
}
