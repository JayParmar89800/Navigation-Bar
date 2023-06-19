function fn1()
{
    text="";
    const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
    arr.forEach(loop);
    document.getElementById("title").innerHTML =
    "forEach() calls a function for each element in an array:";
    document.getElementById("opt").innerHTML=text;

    function loop(value ,index)
    {
        text += index + " : " + value + "<br>";
    }

}
function fn2()
{
    const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
    document.getElementById("title").innerHTML =
    "includes() returns true if an array contains a specified element:";
    document.getElementById("opt").innerHTML = arr.includes("rx-100");

}
function fn3()
{
    const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
    let result =  Array.isArray(arr);
    document.getElementById("title").innerHTML =
    "Array.isArray() returns true if an object is an arry, otherwise false:";
    document.getElementById("opt").innerHTML = result;

}
function fn4()
{
    const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
    let result =  arr.join(" & ");
    document.getElementById("title").innerHTML =
    "join() returns an array as a string:";
    document.getElementById("opt").innerHTML = result;

}
function fn5()
{
    const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
    let result =  arr.keys();
    let text="";
    for(let x of result)
    {
        text+= x + "<br>";
    }
    document.getElementById("title").innerHTML =
    "keys() returns an Array Iterator object with the keys of an array:";
    document.getElementById("opt").innerHTML = text;

}
function fn6()
{
    const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
    document.getElementById("title").innerHTML =
    "The length property sets or returns the number of elements in an array";
    document.getElementById("opt").innerHTML = arr.length;

}
function fn7()
{
    const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
    arr.push("Activa");
    document.getElementById("title").innerHTML =
    "The push() method adds new items to the end of an array.";
    document.getElementById("opt").innerHTML =arr ;

}
function fn8()
{
    const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
    arr.pop();
    document.getElementById("title").innerHTML =
    "The pop() method removes (pops) the last element of an array.";
    document.getElementById("opt").innerHTML =arr ;

}
function fn9()
{
    const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
    document.getElementById("title").innerHTML =
    "The unshift() method adds new elements to the beginning of an array.";

    arr.unshift("Activa");
   
    document.getElementById("opt").innerHTML = arr ;

}
function fn10()
{
    const arr = ["splender", "shine", "rx-100", "Royal Enfield"];
    document.getElementById("title").innerHTML =
    "The shift() method removes the first item of an array.";

    arr.shift();
   
    document.getElementById("opt").innerHTML =arr ;

}