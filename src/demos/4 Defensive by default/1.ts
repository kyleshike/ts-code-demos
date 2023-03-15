// interface User {
//   id: number;
//   name: string;
// }

// interface ApiSuccess<T> {
//   data: T;
//   errors: undefined;
//   isError: false;
//   isLoading: false;
// }

// interface ApiError {
//   data: undefined;
//   errors: string[];
//   isError: true;
//   isLoading: false;
// }

// interface ApiLoading {
//   data: undefined;
//   errors: undefined;
//   isError: false;
//   isLoading: true;
// }

// function getData(): ApiSuccess<User> | ApiError | ApiLoading {
//   const state = Math.floor(Math.random() * 3);
//   if (state === 0) {
//     return {
//       data: { id: 1, name: "Kyle" },
//       isLoading: false,
//       isError: false,
//       errors: undefined,
//     } as ApiSuccess<User>;
//   }

//   if (state === 1) {
//     return {
//       data: undefined,
//       isLoading: false,
//       isError: true,
//       errors: ["wow oh no"],
//     } as ApiError;
//   }

//   return {
//     data: undefined,
//     isLoading: true,
//     isError: false,
//     errors: undefined,
//   } as ApiLoading;
// }

// function processData() {
//   const result = getData();
//   const { data, errors, isError, isLoading } = result;
//   // Result is one of three states: loading, error or success:
//   // result: ApiSuccess<User> | ApiLoading | ApiError
//   // result.data: User | undefined
//   // result.errors: string[] | undefined

//   if (isLoading) {
//     result;
//     // result: ApiLoading
//     // result.data: undefined
//     // result.errors: undefined
//     return "loading...";
//   }

//   // By returning above when the result is ApiLoading,
//   // TS knows that at this point in the function,
//   // it can only be one of the two remaining types

//   // result: ApiSuccess<User> | ApiError

//   if (isError) {
//     result;
//     // result: ApiError
//     // result.data: undefined
//     // result.errors: string[]
//     return errors.map((err) => console.error(err));
//   }

//   // We've now eliminated all possible types but the success state,
//   // and can confidently access data's attributes without safety navigators or conditionals
//   result;

//   // result: ApiSuccess<User>
//   // result.data: User
//   // result.errors: undefined
//   return `id: ${data.id}, name: ${data.name}`;
// }

// export {};

// https://www.typescriptlang.org/docs/handbook/2/narrowing.html
