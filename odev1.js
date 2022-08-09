let arr1 = ["2", "a", "3", 3, 4, 3, 5, 5];
let arr2 = ["c", "c", "h", 1, 1, 1, 4];
let arr3 = [
  { name: "ali", id: 221 },
  { name: "veli", id: 343 },
  { name: "konya", id: 333 },
  { name: "ali", id: 664 },
  { name: "selim", id: 112 },
];
let arr4 = [1, 1, 1, 4, 5, 5, 3, 2];

// ---------------------- SORU -1 ------------------------------------------
// 1- arr1 başına 'a' elemanını ekleyiniz (unshift)

arr1.unshift("a");
//  9
console.log(arr1);
// ['a', '2', 'a', '3', 3, 4, 3, 5, 5]

// ---------------------- SORU -2 ------------------------------------------
// 2- arr1 sonuna 6 elemanını ekleyiniz (push)
arr1.push(6);
// 10
console.log(arr1);
// ["a", "2", "a", "3", 3, 4, 3, 5, 5, 6];

// ---------------------- SORU -3 ------------------------------------------
// 3- arr1 sonundaki elemanı siliniz (pop)
arr1.pop();
// 5
console.log(arr1);
// ['2', 'a', '3', 3, 4, 3, 5]

// ---------------------- SORU -4 ------------------------------------------
// 4- arr1 başındaki elemanı siliniz (shift)
arr1.shift();
// 'a'
console.log(arr1);
// ['2', 'a', '3', 3, 4, 3, 5, 5]

// ---------------------- SORU -5 ------------------------------------------
// 5- arr1 ile arr2 arraylerini iki farklı yöntemle birleştiriniz
// 1. yöntem (concat)
arr1.concat(arrr2);
// ['2', 'a', '3', 3, 4, 3, 5, 5, 'c', 'c', 'h', 1, 1, 1, 4]
// 2. yöntem (spread operator)
const newArr = [...arr1, ...arr2];
console.log(newArr);
// ['2', 'a', '3', 3, 4, 3, 5, 5, 'c', 'c', 'h', 1, 1, 1, 4]
// ---------------------- SORU -6 ------------------------------------------

// 6- kendisine gönderilen arrayde verilen elemanın olup olmadığını bulan array ve  aranan eleman olmak üzere iki parametre alan ve geriye boolean değer döndüren bir fonksiyon yazınız ve bu fonkisiyona arr2 ve 'h' parametresini verip çağırınız
// Declarative
const decFindArrEl = (arr, el) => arr.includes(el);
decFindArrEl(arr2, "h");
// true
// Imperative
const impFindArrEl = function (arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) return true;
  }
};
impFindArrEl(arr2, "h");
// true

// ---------------------- SORU -7 ------------------------------------------
// 7- arr2 içindeki 'h' elemanın indexsini bulunuz
console.log(arr2.indexOf("h"));
// 2

// ---------------------- SORU -8 ------------------------------------------
// 8- arr2 nin eleman sayısını 3 adete 2 faklı yöntemle düşrünüz

// Splice METHOD
arr2.splice(3);
// [1, 1, 1, 4]
console.log(arr2);
// ['c', 'c', 'h']

// For - Pop
for (let i = 0; i < arr2.length; i++) {
  if (arr2.length > 3) {
    arr2.pop();
  }
  arr2;
}
// ['c', 'c', 'h']

// ---------------------- SORU -9 ------------------------------------------

// 9- kendisine verilecek array elemanlarını döngü ile dönüp, array içindeki number değerlerinin toplamını geriye dönen bir fonkiyon yazınız ve arr1 değeri ile çağırınız

const result = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") sum += arr[i];
  }
  return sum;
};

result(arr1);
// 20
// ---------------------- SORU -10 ------------------------------------------

// 10- arr1 elemanlarını string değere çeviren bir map fonksiyonu yazınız
const numberToString = (arr) => arr.map(String);
numberToString(arr1);
//['2', 'a', '3', '3', '4', '3', '5', '5']

// ---------------------- SORU -11 ------------------------------------------

// 11- arr3 içindeki id değeri 221 olan elemanı bulunuz
arr3[0].name;

const find221El = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].id == 221 ? console.log(arr[i]) : null;
  }
};

find221El(arr3);
// {name: 'ali', id: 221}

// 'ali'

// ---------------------- SORU -12 ------------------------------------------

// 12- arr3 içindeki user değerleri ali olan elemanları bulunuz
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i].name == "ali") {
    console.log(arr3[i].id);
  }
}
// 221;
// 664;

// ---------------------- SORU -13 ------------------------------------------

// 13- arr3 içindeki elemanlarının id değerlerinin toplamlarını bulan bir reduce fonsiyonu yazınız
const arr3Reducer = arr3.reduce((acc, i) => acc + i.id, 0);
console.log(arr3Reducer);
// 1673
