/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding makes a reference to the global value
* 2. Implicit binding makes a reference to the object before the "." when calling a function
* 3. New binding make a reference to newly created object returned by the contructor
* 4. Explicit deals with call and apply.
*
* write out a code example of each explanation above
*/

// Principle 1
function winBinding() {
    console.log(this);
  }
  winBinding();
// code example for Window Binding

// Principle 2
const obj = {
    id: 1,
    firstName: "Kristian",
    lastName: "StJohn",
    fullName: function() {
      console.log(this.firstName, this.lastName);
    }
  };

  obj.fullName();
// code example for Implicit Binding

// Principle 3
function Pets(attrs) {
    this.name = attrs.name;
    this.kind = attrs.kind;
    this.food = attrs.food;
    this.speak = function() {
      if (this.kind === "dog") {
        return "I am a DOG";
      } else if (this.kind === "cat") {
        return "I am a CAT";
      }
    };
  }

  const dog = new Pets({
    name: "shadow",
    kind: "dog",
    food: "dog food"
  });
  const cat = new Pets({
    name: "kitty",
    kind: "cat",
    food: "cat food"
  });
  console.log(dog.name);
  console.log(cat.name);
  console.log(dog.speak.call(cat));
  console.log(dog.speak());
  console.log(cat.speak.call(dog));
  console.log(cat.speak());
// code example for New Binding

// Principle 4
function Person(programmer){
    this.programmer = programmer;
    this.greeting = 'How are you today';
    this.speak = function() {
      console.log(`${this.greeting}, ${this.programmer}`)
    }
  }

  const billy = new Person('Billy');


  console.log(billy);

  billy.speak();
// code example for Explicit Binding