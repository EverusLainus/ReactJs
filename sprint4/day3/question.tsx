var age: number = 25;
var largeNumber: bigint = 9007199254740099n;

var name: string = "John Doe";
var isStudent: boolean = true;

var scores: number[] = [85, 90, 95];

var colors: string[] = ["red", "green", "blue"];

var answers: boolean[] = [true, false, true];

var person: [string, number] = ["Alice", 30];

enum Direction {
  North,
  East,
  South,
  West,
}

var currentDirection: Direction = Direction.North;

var randomValue: any = "Hello";

function logMessage(message: string): void {
  console.log(message);
  return;
}

var emptyValue: null = null;

var notAssigned: undefined = undefined;

function add(a: number, b: number): number {
  return a + b;
}

let res = add(2, 5);

interface Rectangle {
  length: number;
  breadth: number;
}

var my_Rectangle: Rectangle = {
  length: 2,
  breadth: 3,
};
