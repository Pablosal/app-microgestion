let date = new Date();
var dd = String(date.getDate()).padStart(2, "0");
var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = date.getFullYear();

const dias = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

date = dd + "-" + mm + "-" + yyyy;
let curr = new Date();
let week = [];
let nextWeek = [];

for (let i = 1; i <= 7; i++) {
  let first = curr.getDate() - curr.getDay() + i;
  const next = first;

  let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
  week.push(day);
}
for (let i = 1; i <= 7; i++) {
  let first = curr.getDate() - curr.getDay() + i;

  let day = new Date(curr.setDate(first))
    .toISOString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("-");

  nextWeek.push(day);
}
export const sameDate = {
  week,
  date,
  nextWeek,
};
