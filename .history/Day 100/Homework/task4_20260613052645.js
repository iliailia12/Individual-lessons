// 4) შექმენი Person class - ი რომელსაც ექნება მინიმუმ 10 კუთვნილება, 3 მათგანი უნდა იყოს private კუთვნილებები, დანარჩენი ჩვეულებრივი, getter ფუნქციებიც შეუქმენი ამ private კუთვნილებებს, ასევე შეუქმენი მინიმუმ 3 მეთოდი რომლებიც დაბეჭდავენ რამოდენიმე კუთვნილებას კონსოლში (ასევე ამ კლასის დახმარებით შექმენი 5 პროდუქტი და შეინახე ყველა მასივში, შემდგომ ეს მასივი კონსოლში გამოიტანე).

class Person{
    constructor(
        id,
        salary,
        password,
        firstName,
        lastName,
        age,
        gender,
        city,
        country,
        profession,
        phone
    ){
        this.id=id
        this.salary=salary
        this.password=password
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.gender=gender
        this.city=id
        this.country=country
        this.profession=profession
        this.id=id
    }
}