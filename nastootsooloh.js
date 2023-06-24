// 8. Нас тооцоолох бодлого: yearOfBirth гэсэн хувьсагчид гараас төрсөн онийг ав. Тухайн оноос тухайн хүний насыг нь бодож гаргаад үр дүнгээ old гэсэн хувьсагчид оноо. Насанд нь харгалзах утгыг хэвлэ.
// 0 <= old <= 1 үед "Infant"
// 1 < old <= 3 үед "Toddler"
// 3 < old <= 5 үед "Preschool"
// 5 < old <=12 үед "Gradeschooler"
// 12 <old <= 18 үед "Teen"
// 18 < old <=21 үед "Young adult"
// 21 < old үед "Adult"
var tursun = prompt("tanii tursun on");
if (tursun !== null) {
  var odoo = new Date().getFullYear();
  var old = odoo - tursun;
  alert("sain bn uu \n\n\nTanii nas:" + old);
  if (old >= 0 && old <= 1) {
    console.log("Infant");
  } else if (old > 1 && old <= 3) {
    console.log("Toddle");
  } else if (3 < old && old <= 5) {
    console.log("Preschool");
    2;
  } else if (5 < old && old <= 12) {
    console.log("Gradeschooler");
  } else if (12 < old && old <= 18) {
    console.log("Teen");
    2;
  } else if (18 < old && old <= 21) {
    console.log("Young adult");
  } else if (old > 21) {
    console.log("Adult");
  }
}
