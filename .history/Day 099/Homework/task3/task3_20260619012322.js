// 3) შექმენი ვებ გვერდი სადაც გექნება 1 დივ ბლოკი და 2 ღილაკი, პირველ ღილაკზე დაკლიკების შემდეგ დივ ბლოკის background color - ი უნდა შეიცვალოს random ფერზე (შექმენი მასივი 5 ფერით და ყოველ ჯერზე სხვადასხვა ფერის უნდა იყოს დივის background color - ი), მეორე ღილაკზე დაკლიკებისას div - ის background color - ი უნდა გახდეს წითელი. (აუცილებლად უნდა იყოს გამოყენებული addEventListener - ი)


const containerDiv = document.getElementsByTagName('div')[0]; // first div
const randomColors = document.getElementById('randomColors');
const resetColorButton = document.getElementById('red');

randomColors.addEventListener('click', () => {
    const colors = ['red', 'blue', 'grey', 'black', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);

    containerDiv.style.backgroundColor = colors[randomIndex];
});

resetColorButton.addEventListener('click', () => {
    containerDiv.style.backgroundColor = 'red';
});