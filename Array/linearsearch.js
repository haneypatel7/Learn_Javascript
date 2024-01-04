let array=[1,2,3,4,5,6,7];
let key=1;
for(i=0;i<array.length;i++)
{
    if(array[i]==key)
    {
        console.log('its available in array');
        return;
    }
    else
    {
        console.log('element is not found');
    }
}
