// base class

class Student {
  constructor(name, rollno) {
    this.name = name;
    this.rollno = rollno;
  }
  intro() {
    console.log(
      "My name is : ",
      this.name,
      "and my roll no is : ",
      this.rollno
    );
  }
}

// inheritance

class Department extends Student {
  constructor(name, rollno, dept, email) {
    super(name, rollno);
    this.dept = dept;
    this.email = email;
  }
  deptDetails() {
    super.intro();
    console.log("My department name is :", this.dept);
    console.log("My email id is :", this.email);
  }
}

const dept = new Department("Balaji", 123, "CS", "balaji@gmail.com");
dept.deptDetails();

// get and set

class email {
  constructor(email) {
    this.email = email;
  }

  get emailAdd() {
    return `${this.email}`;
  }

  set emailAdd(email) {
    if (email === "") {
      throw new Error("Invalid email !");
    }
    this.email = email;
  }
}

let newEmail = new email("balaji@gmail.com");
console.log(newEmail);

newEmail.emailAdd = "balajinew@gmail.com";
console.log(newEmail.emailAdd);

// encapsulation

class user {
    #pass
    constructor(name,pass){
        this.name = name;
        this.pass = pass;
    }

    get details(){
        console.log(this.name,this.#pass);
    }

    set details(pass){
        if(pass.length >=6){
            this.pass = pass;
        }
        else{
            console.log('Invalid password');
        }
    }
}

let userDetails = new user('balaji','balaji123');
console.log(userDetails);

userDetails.details = 'balajinew123';
console.log(userDetails);

// polymorphism

class Animal {
    sound() {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Cat meows");
    }
}

class Lion extends Animal {
    sound(){
        console.log("Lion roars");
    }
}

const dog = new Dog();
dog.sound(); 

const cat = new Cat();
cat.sound(); 

const lion = new Lion();
lion.sound();

// static

class Addition {
    static add(x,y){
        return x+y;
    }
}
console.log(Addition.add(2,3));
