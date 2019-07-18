class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    return `Hi, I am ${this.name}!` 
  }
  getDescription() {
    return `${this.name} is ${this.age}-years-old!`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    
    if (this.hasMajor()) {
      description += `. Their major is ${this.major}.`
    }

    return description;
    // return `${this.name} is ${this.age}-years-old. Major is ${this.major}`;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation = 'uknown') {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.hasHomeLocation()) {
      return greeting += `. My home location is ${this.homeLocation}`;
    } else {
      return greeting;
    }
  }
}

const me = new Traveler('Matt Joers', 33, 'Ashippun');
console.log(me.getGreeting());

const other = new Student();
console.log(other);
console.log(other.getGreeting());