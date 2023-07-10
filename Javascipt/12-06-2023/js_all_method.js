function fn1() {
  const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
  document.getElementById("title").innerHTML =
    "The at() method returns an indexed element from an array.";
  document.getElementById("opt").innerHTML = arr.at(2);
}
function fn2() {
  const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
  const arr1 = ["Activa", "Una", "cd-100", "Discover"];
  document.getElementById("title").innerHTML =
    "The concat() method concatenates (joins) two or more arrays:";
  document.getElementById("opt").innerHTML = arr.concat(arr1);
}
function fn3() {
  const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
  document.getElementById("title").innerHTML =
    "The concat() method concatenates (joins) two or more arrays:";
  document.getElementById("opt").innerHTML = arr.copyWithin(2, 0);
}
function fn4() {
  const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
  document.getElementById("title").innerHTML =
    "fill() fills specified elements in an array with a value.";
  document.getElementById("opt").innerHTML = arr.fill("Activa", 1, 4); //1 is a index nnumber & 4 is a length number
}
function fn5() {
  // const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
  const arr = [50, 34, 45, 23, 12];

  document.getElementById("title").innerHTML =
    "every() returns true if all elements in an array pass a test (provided as a function).";
  document.getElementById("opt").innerHTML = arr.every(fun_1);

  function fun_1(age) {
    return age >= 18;
  }
}
function fn6() {
  // const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
  const arr = [50, 34, 45, 23, 12];

  document.getElementById("title").innerHTML =
    "Get every element in the array that has a value of 18 or more:";
  document.getElementById("opt").innerHTML = arr.filter(fun_1);

  function fun_1(age) {
    return age >= 18;
  }
}

function fn7() {
  // const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
  const arr = [50, 34, 45, 23, 12];

  document.getElementById("title").innerHTML =
    "find() returns the value of the first element in an array that passes a test (provided by a function):";
  document.getElementById("opt").innerHTML = arr.find(fun_1);

  function fun_1(age) {
    return age >= 18;
  }
}
function fn8() {
  // const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
  const arr = [2, 34, 45, 23, 12];

  document.getElementById("title").innerHTML =
    "find() returns the value of the first element in an array that passes a test (provided by a function):";
  document.getElementById("opt").innerHTML = arr.findIndex(fun_1);

  function fun_1(age) {
    return age >= 18;
  }
}
