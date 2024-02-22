function myfunction()
{
    let x=document.forms("ftest");
    let text=" ";
    for(let i=0;i<x.elements.length;i++)
    {
        text+=x.elements[i].value+"<br>";
    }
    document.getElementById("demo").innerHTML=text;
    
}