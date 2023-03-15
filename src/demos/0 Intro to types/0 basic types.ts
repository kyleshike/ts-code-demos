// strings
const myString: string = "test";

// numbers
const myNumber: number = 138;

// booleans
const myBool: boolean = false;

// arrays
const myCollectionOfStrings: string[] = ["here", "it", "is"];

// objects
const myObject: {
  requiredKey: number;
  optionalKey?: string;
  functionKey: () => string;
} = {
  requiredKey: 1,
  optionalKey: undefined,
  functionKey: () => "test",
};

// function arguments
function myFunction(param1: string, param2: number) {}

// function return
function myOtherFunction(): number {
  return 1;
}

// type
type UserType = {
  id: number;
  name: string;
};

// interface
interface UserInterface {
  id: number;
  name: string;
}

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

export {};
