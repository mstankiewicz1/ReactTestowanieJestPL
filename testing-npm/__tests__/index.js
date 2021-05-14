const liczby = [
  [1,3,4],
  [2,3,5]
];

const add = (x,y) => {
  return x + y;
};

const liczba = 4;
const imie = 'Krystian';
const zwierzeta = ["lew", "słoń", "wąż"];



test("Mój test", () => {
  expect(liczba).toBe(4);
  expect(liczba).toEqual(4);

  expect(liczba).toBeGreaterThanOrEqual(2);
  expect(liczba).toBeLessThanOrEqual(5);

  expect(imie).toMatch(/Krys/i);

  expect(zwierzeta).toContain("lew");
});

const p = null;

test("kolejny test", () => {

  expect(p).toBeNull();
  expect(p).not.toBeUndefined();

  expect(p).toBeFalsy();
  expect(p).not.toBeTruthy();

});

// test.each(liczby)("Dodaj %i do %i", (x, y, wynik) => {
//   expect(add(x,y)).toBe(wynik);
// });

const sprawdzam = () => {
  throw new Error("Totalny chaos");
};

test("Błedy", () => {
  expect(sprawdzam).toThrow();
  expect(sprawdzam).toThrow(Error);
  expect(sprawdzam).toThrow("Totalny chaos");
  expect(sprawdzam).toThrow(/chaos/i);
});



