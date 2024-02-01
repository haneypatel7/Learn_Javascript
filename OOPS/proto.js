const student1=
{
    name : "haneypatel",
    adderess:"surat",
    greeting()
    {
        console.log("hellow users");
    }

}; 
const student2=
{
    name:"xyz",
    adderess:"surat",
    
};
student2.__proto__=student1; 

console.log(student2.greeting());