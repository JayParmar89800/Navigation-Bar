function done()
{
    var a,b;
    a=parseInt(document.getElementById("txt_a").value);
    b=parseInt(document.getElementById("txt_b").value);

    if(a==b)
    {
        window.alert("A and B are same");
    }
    else if(a<=b)
    {
        window.alert("B is big compair to A");
    }
    else
    {
        window.alert("A is big compair to B");
    }
}