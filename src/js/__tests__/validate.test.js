import isValid from "../validate";

describe("isValid", () => {
  test("возвращает надпись Номер валиден для валидного номера карты", () => {
    expect(isValid("4716290608934372")).toBe(true);
    expect(isValid("4024007144531130172")).toBe(true);
  });

  test("возвращает false для невалидного номера карты", () => {
    expect(isValid("1234567890123456")).toBe(false);
  });

  test("возвращает false для некорректных номеров карты", () => {
    expect(isValid("1234")).toBe(false);
    expect(isValid("abc")).toBe(false);
    expect(isValid("")).toBe(false);
  });
});
