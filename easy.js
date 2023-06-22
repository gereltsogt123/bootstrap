// 2. сарын дугаар буюу n - 1<=n=>12-д хувьсагчид байх утгын дагуу тухайн сарын өдрийн тоог хэвлэнэ.
// хэрэв 2 дугаар сар бол 28 or 29 гэж хэвлэнэ

let n = prompt("oruulsan sariig heden honogtoig medej bolno");
1 <= n && n >= 12;
n == 1
  ? (n = "31")
  : n == 2
  ? (n = "29 or 30")
  : n == 3
  ? (n = "31")
  : n == 4
  ? (n = "30")
  : n == 5
  ? (n = "31")
  : n == 6
  ? (n = "30")
  : n == 7
  ? (n = "31")
  : n == 8
  ? (n = "31")
  : n == 9
  ? (n = "30")
  : n == 10
  ? (n = "31")
  : n == 11
  ? (n = "30")
  : n == 12
  ? (n = "31")
  : alert((n = "uuchlaarai anduuraad aibnuu daaa hha'_'"));
console.log(n);
