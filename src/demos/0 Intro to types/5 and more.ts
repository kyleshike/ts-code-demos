// keyof
type Point = { x: number; y: number };
type P = keyof Point;

// typeof
const myVar = "wow";
type Type = typeof myVar;

function getPoint() {
  return { x: 1, y: 2 };
}

// ReturnType
type ReturnTypePoint = ReturnType<typeof getPoint>;

// indexed access types
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];

const data = [
  { name: "Joe", age: 12 },
  { name: "Moe", age: 14 },
];

type OtherPerson = typeof data[number];

// and much much more
// https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
