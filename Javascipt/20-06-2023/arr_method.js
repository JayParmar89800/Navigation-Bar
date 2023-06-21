function fn1() {
  const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
  document.getElementById("title").innerHTML =
    "indexOf() in under the bracket put the 'rx-100' and display the result ";
  let result = arr.indexOf("rx-100");
  document.getElementById("arr").innerHTML = arr;
  document.getElementById("opt").innerHTML = result;

  document.getElementById("anotherex").style.display = "block";
}
function fn1_1() {
  const arr = [
    "splender",
    "shine",
    "rx-100",
    "shine",
    "Royal Enfield",
    "rx-100",
  ];
  document.getElementById("title").innerHTML =
    "in second example indexOf() in under the bracket 2 parameter first what we find the index and second parameter value .this value is show the starting at position ";
  let result = arr.indexOf("rx-100", 3);
  document.getElementById("arr").innerHTML = "Array : "+ arr;
  document.getElementById("opt").innerHTML = result;
}
function fn2() {
  document.getElementById("anotherex").style.display = "none";
  const arr = [
    "splender",
    "shine",
    "rx-100",
    "shine",
    "Royal Enfield",
    "rx-100",
  ];
  document.getElementById("title").innerHTML =
    "lastIndexOf() returns the last index (position) of a specified value:";
  let result = arr.lastIndexOf("rx-100");
  document.getElementById("arr").innerHTML = "Array : "+ arr;
  document.getElementById("opt").innerHTML = result;

 
}
function fn3() {
    const arr = [
      "splender",
      "shine",
      "rx-100",
      "shine",
      "Royal Enfield",
      "rx-100",
    ];
    document.getElementById("title").innerHTML =
      "The Array.reverse() method reverses the order of the elements in an array.";
    
    document.getElementById("arr").innerHTML = "Array : "+ arr;
    let result = arr.reverse();
    document.getElementById("opt").innerHTML = result;
}
function fn4() {
    const arr = [
      "splender",
      "shine",
      "rx-100",
      "shine",
      "Royal Enfield",
      "rx-100",
    ];
    document.getElementById("title").innerHTML =
      "Array.slice() returns selected array elements as a new array:";
    
    document.getElementById("arr").innerHTML = "Array : "+ arr;
    let result = arr.slice(1,3);
    document.getElementById("opt").innerHTML = result;
}
  function fn5() {
    const arr = [
      "splender",
      "shine",
      "rx-100",
      "shine",
      "Royal Enfield",
      "rx-100",
    ];
    document.getElementById("title").innerHTML =
      "The Array.sort() method sorts the elements of an array.";
    document.getElementById("arr").innerHTML = "Array : "+ arr;
    let result = arr.sort();
    document.getElementById("opt").innerHTML = result;
}
  
function fn6() 
{
    const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
    document.getElementById("title").innerHTML =
    "The Array.splice() method adds array elements: ";
    document.getElementById("arr").innerHTML = "Array : " + arr;
    // At position 2, add 2 elements: 
    arr.splice(2,0,"Activa","Accesss-125");     //first parameter is set position & second parameter is how many delete the value )
    document.getElementById("opt").innerHTML = arr;
}
function fn7() 
{
    const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
    document.getElementById("title").innerHTML =
    "The Array.toString() method returns a string with all array values separated by commas:";
    document.getElementById("arr").innerHTML ="Array : " + arr;
    let result=arr.toString();
    document.getElementById("opt").innerHTML = result;            //console.log(result);
}
function fn8() 
{
    const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
    document.getElementById("title").innerHTML =
    "valueOf() returns the array itself:";
    document.getElementById("arr").innerHTML ="Array : " + arr;
    let result=arr.toString();
    document.getElementById("opt").innerHTML = result;            
}