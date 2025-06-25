let Employeedetails=[
    {
        "empid":501,
        "empname":"Annamalai",
        "empusername":"sam",
        "emppassword":"sam123",
        "empdesignation":"JAVA STACK",
        "empexp":5,
        "empsalary":70000


    },
     {
        "empid":502,
        "empname":"Sathish",
        "empusername":"sathish",
        "emppassword":"sathish@123",
        "empdesignation":"UI DEVOLPER",
        "empexp":4.5,
        "empsalary":90000


    },
     {
        "empid":503,
        "empname":"Vidhya",
        "empusername":"vidhya",
        "emppassword":"vidhya22",
        "empdesignation":"MERN STACK",
        "empexp":5,
        "empsalary":150000


    },
    
]

export const create=(obj)=>{
    Employeedetails.push(obj)
}
export const list=()=>
{
    return Employeedetails;
}
export const read=(index)=>
{
    return Employeedetails[index];
}
export const fetchexact=(name)=>
{
    const temp= Employeedetails.filter((element)=>
    {
        return element.empname===name;
    })
    return temp[0];
}
export const update=(ele,index)=>
{
    Employeedetails[index]=ele

}
export const deleting=(index)=>
{
    var yesno=prompt("Are u sure delete your valeus");
    if(yesno==='yes')
    {
        Employeedetails=Employeedetails.filter((ele,ind)=>
        {
            return ind!==index; 
        })
        return Employeedetails;
        
    }
    else if(yesno=='no')
    {
        alert('your values are not deleted')
    }
    else
    {
        alert("Not Valid")
    }


}



