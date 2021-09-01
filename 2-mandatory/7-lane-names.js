/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.

  HINT: string and array methods that could be helpful (indexOf, filter)
*/

function getLanes(strtNames) {
  let containsLane = strtNames.filter((name) =>
    name.toLowerCase().includes("lane")
  );
  return containsLane;
}

let streetNamz = [
  "Abchurch Lane",
  "Adam's Court",
  "Addle Hill",
  "Addle Lane",
  "Alban Highwalk",
  "hello",
  "test lane",
];

console.log(getLanes(streetNamz));

/* ======= TESTS - DO NOT MODIFY ===== */

test("getLanes function works", () => {
  const streetNames = [
    "Abchurch Lane",
    "Adam's Court",
    "Addle Hill",
    "Addle Lane",
    "Alban Highwalk",
  ];

  expect(getLanes(streetNames)).toEqual(["Abchurch Lane", "Addle Lane"]);
});
