function fn1() {
  const arr = ["splender", "shine", "rx-100"];
  document.getElementById("title").innerHTML = "Create Array";

  document.getElementById("opt").innerHTML = arr;
}

function fn2() {
  const arr = [];
  arr[0] = " Dr.subhash ";
  arr[1] = " PKM ";
  arr[2] = " Noble";

  document.getElementById("title").innerHTML =
    "Create Array using single Element :";
  document.getElementById("opt").innerHTML = arr;
}
function fn3() {
  const arr = new Array("Junagadh", "Ahmedabad", "Rajkot");

  document.getElementById("title").innerHTML =
    "Create Array using new Array keywords";
  document.getElementById("opt").innerHTML = arr;
}
function fn4() {
  const arr = ["splender", "shine", "rx-100"];
  document.getElementById("title").innerHTML = "Accessing Array Elements";

  document.getElementById("opt").innerHTML = arr[1];
}
function fn5() {
  const arr = ["splender", "shine", "rx-100"];
  document.getElementById("title").innerHTML = "Converting Array to string";

  document.getElementById("opt").innerHTML = arr.toString();
}
function fn6() {
  const arr = { 
                    Bike: "Splender", car: "Kia", Truck: "Eiecer" 
                };
  document.getElementById("title").innerHTML = "JavaScript uses names to access object properties.";

  document.getElementById("opt").innerHTML =  arr.Bike;
}
function fn7() {
    const arr = ["splender", "shine", "rx-100"];

    document.getElementById("title").innerHTML = "Check the array length";
  
    document.getElementById("opt").innerHTML =  arr.length;
  }
  function fn8() {
    const arr = ["splender", "shine", "rx-100"];
    arr[2]="Royal Enfield";
    document.getElementById("title").innerHTML = "Changing the array elements";
    
    document.getElementById("opt").innerHTML =  arr;
  }
  function fn9() {
    const arr = ["splender", "shine", "rx-100","Royal Enfield"];
    document.getElementById("title").innerHTML = "Fetch the last index";
    
    document.getElementById("opt").innerHTML =  arr[arr.length-1];
  }
  function fn10() {
    const arr = ["splender", "shine", "rx-100","Royal Enfield"];
    document.getElementById("title").innerHTML = "Using for loop and ul&li";
    let text="<ul>";
    for(let i=0;i<arr.length;i++)
    {
        text +="<li>" +arr[i]+"</li>";
    }
    text += "</ul>"
    document.getElementById("opt").innerHTML =  text;
  }
  function fn11()
  {
    document.getElementById("btn").style.display="inline-block";
    
  }
  function fn11_1()
  {
    const arr = ["splender", "shine", "rx-100","Royal Enfield"];
    arr.push("Activa");
    document.getElementById("title").innerHTML = "Push the elements";
    
    document.getElementById("opt").innerHTML =  arr;

    

  }
  function fn12() {
    const arr = ["splender", "shine", "rx-100","Royal Enfield"];
    document.getElementById("title").innerHTML = "Check the Typeof array";
    
    document.getElementById("opt").innerHTML = typeof arr;
  }
  function fn13() {
    const arr = ["splender", "shine", "rx-100","Royal Enfield"];
    document.getElementById("title").innerHTML = "Check the Typeof array";
    
    document.getElementById("opt").innerHTML = Array.isArray(arr);
  }
  