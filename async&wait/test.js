
function getdata(dataid,getnextdata)
{
setTimeout(()=>
{
    console.log(dataid);
    if(getnextdata)
    {
        getnextdata();
    }
}
,2000)
}

getdata(1,()=>
{
    getdata(2);
});


function fetchdata()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve(455)
        },4500)
    })

}
let data=fetchdata();
