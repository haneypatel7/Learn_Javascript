//function take function as argument its called callbacks function
//callback,when one function execute then one promise resturn as funtion called callbacks function

function display(a)
{
    console.log(a);
}

function factorial(a)
{
    let fact=1;
    for(var i=1;i<=a;i++)
    {
        fact=fact*i;
    }
    display(fact);
    
}

factorial(5);
