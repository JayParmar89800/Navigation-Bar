function add() {
  var a, b, c;
  a = parseInt(document.getElementById("txt_a").value);
  b = parseInt(document.getElementById("txt_b").value);

  c = a + b;
  window.alert(a + " + " + b + " = " + c);
}
function sub() {
  var a, b, c;
  a = parseInt(document.getElementById("txt_a").value);
  b = parseInt(document.getElementById("txt_b").value);

  c = a - b;
  window.alert(a + " - " + b + " = " + c);
}
function mul() {
  var a, b, c;
  a = parseInt(document.getElementById("txt_a").value);
  b = parseInt(document.getElementById("txt_b").value);

  c = a * b;
  window.alert(a + " * " + b + " = " + c);
}
function div() {
  var a, b, c;
  a = parseInt(document.getElementById("txt_a").value);
  b = parseInt(document.getElementById("txt_b").value);

  c = a / b;
  window.alert(a + " / " + b + " = " + c);
}
function sub() {
  var a, b, c;
  a = parseInt(document.getElementById("txt_a").value);
  b = parseInt(document.getElementById("txt_b").value);

  c = a % b;
  window.alert(a + " % " + b + " = " + c);
}
function incre()
{
  var a ; 
  a = parseInt(document.getElementById("txt_incre").value);
  a++;

  window.alert("After Increment your value : "+a);
}
function decre()
{
  var a ; 
  a = parseInt(document.getElementById("txt_incre").value);
  a--;

  window.alert("After Decrement your value : "+a);
}
function expo()
{
  var a;
  a = parseInt(document.getElementById("txt_incre").value);


  window.alert("Your Exponentiation value : "+ a ** 2);
}
function p1()
{
  var a, b, c,ans;
  a = parseInt(document.getElementById("txt_va").value);
  b = parseInt(document.getElementById("txt_vb").value);
  c = parseInt(document.getElementById("txt_vc").value);
  ans=a + b * c;

  window.alert("Answer = "+ans);

}
function p2()
{
  var a, b, c,ans;
  a = parseInt(document.getElementById("txt_va").value);
  b = parseInt(document.getElementById("txt_vb").value);
  c = parseInt(document.getElementById("txt_vc").value);
  ans=a + b - c;

  window.alert("Answer = "+ans);

}
function p3()
{
  var a, b, c,ans;
  a = parseInt(document.getElementById("txt_va").value);
  b = parseInt(document.getElementById("txt_vb").value);
  c = parseInt(document.getElementById("txt_vc").value);
  ans=a * b / c ;

  window.alert("Answer = "+ans);

}