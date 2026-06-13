// 2) შექმენი 2 Factory Function - ი, პირველი User - ის შესახებ, მეორე Product - ის შესახებ, შექმენი მათი დახმარებით 5 მომხმარებლის ობიექტი და 5 პროდუქტის ობიექტი.

function user(name,lastname,id,weight,height,birthEar){
    return{
    name: name,
    lastname: lastname,
    id: id,
    weight:weight,
    height:height,
    birthEar:birthEar
}}
const user1 = user('ilia','kviciani','2000139840184839',140,1.80,2011)
console.log(user1)
function Product(name , price , color, condition , size){
    return{
    name:name,
    price:price,
    color:color,
    condition:condition,
    size:size
}}
const product1 = product ('iphone17',500%)