// Intersection
interface Name {
  name: string;
}

interface Age {
  age: number;
}

type Person = Name & Age;

// const myPerson: Person = {
//   name: "Kyle",
//   age: 36,
// };

export {};
