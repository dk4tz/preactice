// Primatives: number, string, boolean, null, undefined

let age: number = 24;

let username: string;

username = 'big dog';

let isABoss: boolean = true;

// More complex types: arrays, objects

let hobbies: string[] = ['chatting', 'eating', 'making dope shit'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'David',
  age: 29,
};

let people: {
  name: 'David';
  age: 29;
}[];

// Type inference
// good practice to use type inference

let course = 'getting money 101'; // inferred as string
// course = 1234 throws an error

// Union types
let union: string | number;
union = 'yooooo';
union = 700000;

// Type aliases

type Boss = {
  title: string;
  fit: string;
  muney: number;
};

let lulBoss: Boss = {
  title: 'lul big shot',
  fit: 'on point',
  muney: 10000000,
};

let bigBoss = 'i like it like that';

let bosses: Boss[] = [lulBoss, lulBoss, lulBoss];
// let bosses: Boss[] = [lulBoss, lulBoss, bigBoss]; <-- this won't work

// Functions & types
let makeMoney = (a: number, b: number): number => {
  return a + b;
};

// void is a special type that only works with functions --> it means you don't return anything
let printDat = (value: string): void => {
  console.log(value);
};

// Generics
const insertAtBeginning = (array: any[], value: any) => {
  const newArray = [value, ...array];
  return newArray;
};

const dummyArray = [1, 2, 3];
const updatedArray = insertAtBeginning(dummyArray, -1); // [-1, 1, 2, 3]
// this is problematic because by defining the array parameter as 'any', we lose a lot of the value of TS
// for example, what if we called updatedArray[0].split('') --> calling string method on a number
// we wouldn't get an error in our IDE (because type: any), we would get it at runtime... BAD

const betterInsert = <T>(array: T[], value: T) => {
  const newArray = [value, ...array];
  return newArray;
};

const updatedArrayBetter = betterInsert(dummyArray, -1); // [-1, 1, 2, 3]
// now this DOES throw an error --> updatedArrayBetter[0].split('');
// TS is able to infer that dummyArrayBetter: number[]

var stringArray = ['a', 'b', 'c', 'd'];
stringArray = betterInsert(stringArray, 'z');
// this also works and we WOULD be able to call stringArray[0].split('') because TS infers stringArray: string[]
