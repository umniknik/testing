import activeImgCard from "../activeImgCard";

describe("activeImgCard", () => {
  test("Возвращает атрибуты карты МИР", () => {
    expect(activeImgCard("280000000000")).toBe('[data-type="МИР"]');
  });

  test("Возвращает атрибуты карты American_express", () => {
    expect(activeImgCard("343109948070151")).toBe(
      '[data-type="American_express"]'
    );
  });

  test("Возвращает атрибуты карты VISA", () => {
    expect(activeImgCard("4024007195500797")).toBe('[data-type="VISA"]');
  });

  test("Возвращает атрибуты карты Discover", () => {
    expect(activeImgCard("6011797902366819")).toBe('[data-type="Discover"]');
  });

  test("Возвращает ничего", () => {
    expect(activeImgCard("9011797902366819")).toBe(undefined);
  });
});
