// 3) შექმენი Product class - ი, რომელსაც ექნება მინიმუმ 5 კუთვნილება, 3 მათგანი უნდა იყოს private კუთვნილებები, დანარჩენი 2 ჩვეულებრივი, ასევე ამ კლასს აუცილებლად შეუქმენი 3 getter ფუნქცია იმისთვის, რომ private კუთვნილებები დააბრუნონ.

class Product {
    constructor(name, condition, color, price, category) {
        this.name = name
        this.condition = condition
        this.color = color
        this.price = price
        this.category = category
    }
    get name() {
        return this.name
    }
}