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
const user1 = user('ilia','kviciani')
function Product(name , price , color, condition , size){
}