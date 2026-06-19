// 4) შექმენი counter - ი, ვებ საიტზე უნდა გქონდეს პარაგრაფი "count: 0" და 2 ღილაკი, პირველზე დაკლიკებისას count - ი უნდა იზრდებოდეს 1 - ით, მეორეზე დაკლიკებისას count - ი უნდა ხდებოდეს 0.

const caunt = document.getElementById('caunt')
const increase = document.getElementById('increase')
const reset = document.getElementById('reset')
let sum = 0
increaseButton.addEventListener("click", () => {
    sum++;

    count.textContent = `Count: ${sum}`;
});

resetButton.addEventListener("click", () => {
    sum = 0;

    count.textContent = "Count: 0";
});