
function getdata(dataid,getnextdata)
{
setTimeout(()=>
{
    console.log(dataid);
}
,2000)
}

getdata(1,()=>
{
    getdata(2);
});
