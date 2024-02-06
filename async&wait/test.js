
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
