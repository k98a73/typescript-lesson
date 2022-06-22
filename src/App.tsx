import { type } from "@testing-library/user-event/dist/type";
import React from "react";

import "./App.css";

const name = "hello";

let nameChange = "hello";
nameChange = "hello2";

let username = "Hello";
let dummyNum = 2;
let bool: boolean = true;

let array1 = [true, false, true];
let array2 = [0, 1, "hello"];

interface NAME {
  first: string;
  last: string | null;
}

let nameObj: NAME = { first: "Yamada", last: null };

const func1 = (x: number, y: number): number => {
  return x + y;
};

// Intersection Types
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
};

// Union Types
let value: boolean | number;
value = true;
value = 10;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello"];


// Literal Types
let company: "Facebook" | "Google" | "Amazon";
company = "Amazon";

let memory: 256 | 512;
memory = 512;

// typeof
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";

let animal = {cat: "small cat"};
let newAnimal: typeof animal = {cat: "big cat"};

// keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS
key = "primary";

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
