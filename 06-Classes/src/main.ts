/* 
Channel: Dave Gray
Video: TypeScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
Link: https://www.youtube.com/watch?v=gieEQFIfgYc&t=7661s
*/

// -------------------------------------------------------------------------
// Construct a class
class Coder {
  /* name: string;
  music: string;
  age: number;
  lang: string; */
  secondlang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  
  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang);

// -------------------------------------------------------------------------
// Inheritance
class WebDev extends Coder {
  constructor (
    public computer: string,
    name: string,
    music: string,
    age: number
    ) {
      super(name, music, age);
      this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
console.log(Sara.getAge());
// console.log(Sara.age);
// console.log(Sara.lang);

// -------------------------------------------------------------------------
// Implement a Interface
interface Musician {
  name: string,
  instrument: string,
  play(action: string): string
}

class Guitarist implements Musician {
  name: string;
  instrument: string;
  
  constructor (name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  
  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "Guitar");
console.log(Page.play("strums"));

// -------------------------------------------------------------------------
// Static properties
class Peeps {
  static count: number = 0;
  
  static getCount(): number {
    return Peeps.count;
  }
  
  public id: number;
  
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);
console.log(Peeps.count);

// -------------------------------------------------------------------------
// Getters and Setters
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every(el => typeof el === "string" )) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of string");
  }
}

const myBands = new Bands();
myBands.data = ["Neil Young", "Led Zep"];
console.log(myBands.data);
myBands.data = [...myBands.data, "ZZ Top"];
console.log(myBands.data);
// myBands.data = ["Van Halen", 5150];
