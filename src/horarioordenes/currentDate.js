let date = new Date();
var dd = String(date.getDate()).padStart(2, "0");
var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = date.getFullYear();

date = yyyy + "-" + mm + "-" + dd;
let week = [];
let nextWeek = [];

let curr = new Date();
week.push(
  new Date(curr.setDate(curr.getDate() - curr.getDay()))
    .toISOString()
    .slice(0, 10)
);
for (let i = 1; i <= 6; i++) {
  let first = curr.getDate() - curr.getDay() + i;

  let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
  week.push(day);
}
for (let i = 1; i <= 7; i++) {
  let curr = new Date();
  let firstt = curr.getDate() - curr.getDay() + i;

  let newday = new Date(curr.setDate(firstt)).toISOString().slice(0, 10);

  nextWeek.push(newday);
}

date.split(" ").reverse().join();
export const sameDate = {
  week,
  date,
  nextWeek,
};
