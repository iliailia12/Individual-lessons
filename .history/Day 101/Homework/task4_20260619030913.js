 

class Product {
    constructor(name, price, brand) {
    this.name = name;
    this.price = price;
    this.brand = brand;
}
getInfo() {
    return `${this.brand} ${this.name} - ${this.price}₾`;
}
}
class Phone extends Product {
    constructor(name, price, brand, storage) {
    super(name, price, brand);
    this.storage = storage;
}
}
class Laptop extends Product {
constructor(name, price, brand, ram) {
    super(name, price, brand);
    this.ram = ram;
}
}
class TV extends Product {
    constructor(name, price, brand, screenSize) {
    super(name, price, brand);
    this.screenSize = screenSize;
}
}
const phone1 = new Phone("iPhone 15", 3200, "Apple", "256GB");
const laptop1 = new Laptop("ThinkPad X1", 4500, "Lenovo", "16GB");
const tv1 = new TV("QLED Q80C", 2800, "Samsung", '55"');
console.log(phone1);
console.log(laptop1);
console.log(tv1);
console.log(phone1.getInfo());
console.log(laptop1.getInfo());
console.log(tv1.getInfo());