// 3.if … else ашиглан myAge болон yourAge-ийн утгыг харьцуул. Харьцуулалт дээр үндэслэн үр дүнг консол руу хөгшин (би эсвэл та) гэж тэмдэглэнэ үү. Насыг оруулахын тулд prompt("Насаа оруулна уу:")-г ашиглана уу.

// 4. Амралтын өдөр эсвэл ажлын өдөр эсэхийг шалгаарай.

// 5. Хэрэглэгчээс цаг оруулах, цаг тутамд үнэлгээ өгөх скрипт бичээрэй. Тухайн хүний цалинг тооцно уу
// let hours = 40
// let ratePerHour = 28
var myAge = prompt("nasaa oruul");
var yourAge = prompt("ta nasaa oruul");
if (myAge >= 0 && myAge < 17) {
  console.log(myAge + ": hvvhed");
} else if (myAge > 17 && myAge <= 40) {
  console.log(myAge + ": tom hvn");
} else if (myAge > 40 && myAge <= 90) {
  console.log(myAge + ": hugshin");
} else if (myAge > 90) {
  console.log(myAge + ": hugshin honinii nasgvi");
}
if (yourAge >= 0 && yourAge < 17) {
  console.log(yourAge + ": hvvhed");
} else if (yourAge > 17 && yourAge <= 40) {
  console.log(yourAge + ": tom hvn");
} else if (yourAge > 40 && yourAge <= 90) {
  console.log(yourAge + ": hugshin");
} else if (yourAge > 90) {
  console.log(yourAge + ": hugshin honinii nasgvi");
}
