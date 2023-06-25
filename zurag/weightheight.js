// // 5. weight, height гэсэн 2 хувьсагчид утга оруулахад тухайн хэмжээнээс хамааран биеийн жингийн индексийг тооцож тухайн индекс-д харгалзах утгыг хэвлэнэ.
// // Жингийн дутагдалтай
// // Эрүүл
// // Илүүдэл жинтэй
// console.log(jin);

// var jin = prompt("jingee oruulna uu");
// var undur = prompt("undur oruulna uu");

// if (jin <= 60) alert((n = "dutagdaltai"));
// else if (jin <= 80) alert((n = "ervvl"));
// else if (jin >= 90) alert((n = "targalalttai"));
// if (jin <= 60) alert((n = "dutagdaltai"));
// else if (jin <= 80) alert((n = "ervvl"));
// else if (jin >= 90) alert((n = "targalalttai"));
function calculateBMI(weight, height) {
  // Convert height to meters
  var heightInMeters = height / 100;

  // Calculate BMI
  var bmi = weight / (heightInMeters * heightInMeters);

  return bmi;
}

// Example usage
var weight = 70; // in kilograms
var height = 170; // in centimeters

var bmi = calculateBMI(weight, height);
console.log("BMI:", bmi.toFixed(2));
