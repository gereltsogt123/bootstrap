// 1. Хоёр багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )
// 2. Багийн дундаж нөгөө багийхаас их бол тэр баг түрүүлсэн гэж хэвлэнэ үү. Багуудын оноо тэнцсэн тохиолдолд багууд тэнцсэн гэж хэвлэнэ үү.
// Энэ дүрэм нь зөвхөн багийн дундаж 100 аас багагүй тохиолдолд энэхүү дүрэм хэрэгжэхийг анхаарна уу. Хэрвээ 2 баг 2 уулаа 100 аас бага тохиолдолд ялагч байхгүй. Тус бүрийн нөхцөлийг оноог өөрчилж туршиж үзээрэй.
var Ateam = (100 + 80 + 200) / 3;
console.log(Ateam + "  dundaj onoo");
var Bteam = (100 + 80 + 70) / 3;
console.log(Bteam + "  dundaj onoo");
if (Ateam < 100 && Bteam < 100) {
  console.log("HOYR BAGIIN ONOO 100 HVREEEGV UCHRAAS YLAGCH BHGVI");
}
// a b iin onooo 100gaas baga bish ih bas tentsvv vyd door bgaa code ajillana
else {
  if (Ateam > Bteam) {
    console.log("A TEAM WIN");
  } else if (Ateam < Bteam) {
    console.log("B TEAM WIN");
  } else {
    alert("hoyr bagiin onoo tentslee");
  }
}
console.log(typeof Ateam);
