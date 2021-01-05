//boolean
let isDone: boolean = false

//number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//string
let name1: string = "bob";
name1 = 'smith';
let age: number = 37
let sentense: string = `Hello, my name is ${name1}`//or "hello, my name is "+name
console.log(sentense)

//array
let list :number[] = [1,2,3,4,5]
let list1: Array<number> = [1,2,3,4,5];

//tuple
let x: [string, number]
x = ["hello", 10]

//enum
let Red
let Green
let Blue
enum Color {Red,Green,Blue}

//any
let smth: any = 0
smth = 'Bob'
smth = true

//void
function warnUser(): void {
    alert("This is my warning message");
}

//assertions (Приведение к типу)
let someValue1: any = "this is a string"; 
let strLength1: number = (<string>someValue1).length;

let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;
