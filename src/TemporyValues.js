let Employeedetails=[
    {
        "empid":1,
        "empname":"Annamalai",
        "empusername":"Annamalai1122",
        "emppassword":"sam123",
        "empdesignation":"JAVA FULL STACK DEVELOPER",
        "empexp":5,
        "empsalary":765000
    },
    {
        "empid":2,
        "empname":"Rajesh",
        "empusername":"Rajesh123",
        "emppassword":"Rajesh123",
        "empdesignation":"Trainer",
        "empexp":4,
        "empsalary":580000
    },
    {
        "empid":3,
        "empname":"Jayaprakash",
        "empusername":"Prakash456",
        "emppassword":"Jaya123",
        "empdesignation":"JAVA FULL STACK DEVELOPER",
        "empexp":1,
        "empsalary":440000
    }
]

export const create=(obj)=>
{
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

export  const fetchexact=(name)=>
{
    const temp=Employeedetails.filter((element)=>
    {
        return element.empname===name;
    })

    return temp[0];
}

export const update=(ele,index)=>
{
 Employeedetails[index]=ele;
}

export const deleting=(index)=>
{
    var yesno=prompt(" are you sure your values is deleted");
    if(yesno==='yes')
    {
        Employeedetails=Employeedetails.filter((ele,ind)=>
        { 
            return ind!==index;
        })
        return Employeedetails;
    }
    else if(yesno==='no')
    {
        alert('your value is not deleted')
        return Employeedetails;
    }
    else{
        alert("  your values is not deleted")
    }
}