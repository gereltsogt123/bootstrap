// Багш сурагчдын эцсийн шалгалтын дүнг дүгнэхээр болжээ
// 1. Бат - 67 оноо, Онц Дүмд - 59 оноо авчээ.
// 2. Шалгалтын онооноос хамааран багш тодорхой дүнгийн жагсаалт гаргах ёстой бөгөөд энэ нь
// a. Хэрвээ оноо 60 хувиас доош байвал (60 орохгүй) - Маш муу
// b. Хэрвээ оноо 60 - 70 (70 орохгүй) хооронд байвал - Хангалттай
// c. Хэрвээ оноо 70 - 80 (80 орохгүй) хооронд байвал - Дунд
// d. Хэрвээ оноо 80 - 90 (90 орохгүй) хооронд байвал - Сайн
// e. Хэрвээ оноо 90 - 100 хооронд байвал - Маш сайн гэсэн үнэлгээг өгч байгаа юм байна.
// 3. Тэгвэл тухайн сурагчдыг тэнцсэн болоод тэнцээгүй эсэхийг жагсааж доорх хэлбэрээр
// НЭР - АВСАН ОНОО - ҮНЭЛГЭЭ гэсэн маягаар console дээр харуулна уу.
var bat = prompt("dvngee oruulna uu?");
var ontsDvmd = prompt("dvngee oruulna uu?");
if (bat >= 90 && bat <= 100) {
  console.log(bat + "%" + " :Маш сайн");
} else {
  if (bat >= 80 && bat < 90) {
    console.log("Бат: " + bat + "%" + " :Сайн");
  } else if (bat >= 70 && bat < 80) {
    console.log("Бат: " + bat + "%" + " :Дунд");
  } else if (bat >= 60 && bat < 70) {
    console.log("Бат: " + bat + "%" + " :Хангалттай");
  } else if (bat < 60) {
    console.log("Бат: " + bat + "%" + " :Маш муу");
  }
}
if (ontsDvmd >= 90 && ontsDvmd <= 100) {
  console.log(ontsDvmd + "%" + " :Маш сайн");
} else {
  if (ontsDvmd >= 80 && ontsDvmd < 90) {
    console.log("ontsDvmd: " + ontsDvmd + "%" + " :Сайн");
  } else if (ontsDvmd >= 70 && ontsDvmd < 80) {
    console.log("ontsDvmd: " + ontsDvmd + "%" + " :Дунд");
  } else if (ontsDvmd >= 60 && ontsDvmd < 70) {
    console.log("ontsDvmd: " + ontsDvmd + "%" + " :Хангалттай");
  } else if (ontsDvmd < 60) {
    console.log("ontsDvmd: " + ontsDvmd + "%" + " :Маш муу");
  }
}
