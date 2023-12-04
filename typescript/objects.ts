import { lg } from "./utils";

export const objThis = () => {
  const obj3 = {
    mesg: "Hello World",
    getMesg() { const mesg = "haha"; return this.mesg },
  }
  lg(obj3.getMesg())//this inside objects will point to that object
  //const name = 'alice'
  var name = 'bob'
  class Pet {
    name: string;
    constructor(name: string) { this.name = name; }
    getName = () => this.name;//arrow functions inherit context from their parents!
    getName2 = function (this: Pet) { return this.name; }//older functions inherit context from Global object
  }
  const cat = new Pet("Fluffy")
  lg('getName:', cat.getName())//Fluffy
  lg('getName2:', cat.getName2())//Fluffy
}
export const extendObj = () => {
  //Objects and arrays are passed by reference, and all other variables are passed by value!
  const basicConfig = { host: 'localhost' }
  const extendConfig = (config: any) => {
    //Make a new object via spread operator or Object.assign, then add properties to it
    return { ...config, port: 3000 }
    //return Object.assign({}, config, { port: 3000 })
    //config.port = 3000;//will mutate the passed object
    //return config;
  }
  const extendedConfig = extendConfig(basicConfig)
  lg('basicConfig', basicConfig)
  lg('extendConfig', extendedConfig)
}

// Object Constructor or constructor function: using "function" keyword to make objects, in contrast to using "class" keyword
export const Person = function (this: any, first: string, last: string) {
  this.firstName = first;
  this.lastName = last;
  this.getFirstName = function () {
    return this.firstName;
  }
  this.getLastName = function () {
    return this.lastName;
  }
  this.getFullName = function () {
    return this.getFirstName() + " " + this.getLastName();
  }
  this.setFirstName = function (first: string) {
    return this.firstName = first;
  }
  this.setLastName = function (last: string) {
    return this.lastName = last;
  }
  this.setFullName = function (first: string, last: string) {
    this.setFirstName(first)
    this.setLastName(last)
    return this.getFullName()
  }
}

//make object via Class
interface IUser {
  getFullname(): string
}
export class User implements IUser {
  //private userId: string;//only private in TS, not in JS, can only be accessed via functions
  static readonly constant1 = 100;

  constructor(public first: string, public last: string, public age: number, private userId: string, readonly username: string, public isValidated?: boolean) {
  }
  getFullname(): string { return this.first + ' ' + this.last; }
  getUserId(): string { return this.userId; }
  setFirstName(first: string): string {
    return this.first = first;
  }
  setLastName(last: string): string {
    return last = last;
  }
  /*changeReadonly(): void {
    this.username = 'foo';// Error!
  }*/
  sayHello() {
    lg(`Hello, my name is ${this.first} ${this.last} and I am ${this.age} years old.`);
  }
}
//inherit from User class
class Admin extends User {
  private editor: string | undefined;//or editor!: any[] 
  setEditor(editor: string) {
    this.editor = editor;
  }
  getEditor() { return this.editor }
}

//make object via closure methods
export const makePerson = function (init: number) {
  let count = init;
  const getCount = () => {
    lg('count', count); return count;
  };
  const increment = (value: number) => {
    count += value; lg('count', count)
    return count;
  }
  const decrement = (value: number) => {
    count -= value; lg('count', count)
    return count;
  }
  const reset = (value: number) => {
    count = init; lg('count', count)
    return count;
  }
  return {
    getCount, increment, decrement, reset
  }
}