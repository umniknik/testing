export default function activeImgCard(numberCard) {
  switch (true) {
    case /^2/.test(numberCard):
      return '[data-type="МИР"]';

    case /^34/.test(numberCard):
      return '[data-type="American_express"]';

    case /^4/.test(numberCard):
      return '[data-type="VISA"]';

    case /^6/.test(numberCard):
      return '[data-type="Discover"]';

    default:
      break;
  }
}
