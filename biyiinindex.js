var jin = prompt("jin oruulna uu");
var undur = prompt("undur oruulna uu");
let a = jin / (undur * undur);
if (a >= 18.5 && a <= 24.9) {
  console.log(a + " ervvl");
} else {
  if (a < 18.5) {
    console.log(a + " dutagdaltai");
  } else if (a >= 29.9) {
    console.log(a + " targalalttai");
  }
}
