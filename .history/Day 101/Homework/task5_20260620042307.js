// 5) შექმენი Person კლასი, რომელსაც კონსტრუქტორში გადაეცემა სახელი და ასაკი. დაამატე მეთოდი introduce(), რომელიც დაბეჭდავს ინფორმაციას ადამიანზე.

class Person {
    constructor(age,name){
        this.age=age
        this.name=name
    }
    introduce(){
        console.log(`გამარჯობა მე ვარ $`)
    }
}