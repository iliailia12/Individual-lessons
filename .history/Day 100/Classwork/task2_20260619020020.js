// 2) შექმენი Person კლასი რომელსაც კონსტრუქტორში ექნება შემდეგი კუთვნილებები: name, age, country და favoriteColor, შემდგომ შექმენი increamentAge მეთოდი რომლის დავალებაც იქნება გაზარდოს age - ი ერთით.

class person {
    constructor(name,age,country,favoriteColor1){
        this.name=name
        this.age=age
        this.country=country
        this.favoriteColor1=favoriteColor1
    }
    incrementAge() {
        this.age++
    }
}

const person1 = new Person("Nika", 20, "Georgia", "Blue")

console.log(person1.age)

person1.incrementAge()

console.log(person1.age)