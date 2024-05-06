//Create a person class with details

class Person {
    constructor(name, age, gender, designation) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.designation = designation;
    }
    display(){
        console.log(this.name,this.age,this.gender,this.designation)
    }
}
let person = new Person('Bharanidharan', 25, 'Male', 'Developer');

person.display()