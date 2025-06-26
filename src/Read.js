import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { read } from "./TemporyValues"
export const ReadEmployee=(position)=>
{
       const[userdetail,setUserdetail]=useState({
            "empid":0,
            "empname":"",
            "empusername":"",
            "emppassword":"",
            "empdesignation":"",
            "empexp":0,
            "empsalary":0
        });
        const callingread=()=>
        {
            setUserdetail(read(position.ind))
            // const res=read(position.ind);
            // if(res){
            //     setUserdetail(res)
            // }


        };

        // useEffect(()=>{
        //     callingread()
        // },[position.ind])
        useEffect(()=>
        {
            callingread()
        })
        return(
            <>
            <div className="container text-center mt-5">
                <div className="row justify-content-center">
                    <div className="bg-warning text-light col-lg-8 col-md-10 col-sm-12">
                        <h1>HE/She(Employee Name) {userdetail.empname}</h1>
                        <ul type="square">
                            <b>EMPLOYEE DETAILS</b>
                            <li>Employee Id:{userdetail.empid}</li>
                            <li>Employee Username:{userdetail.empusername}</li>
                            <li>Employee Password:{userdetail.emppassword}</li>
                            <li>Employee Experience:{userdetail.empexp}</li>
                            <li>Employee Salary:{userdetail.empsalary}</li>
                            <li>Employee Designation:{userdetail.empdesignation}</li>

                        </ul>
                    </div>
                </div>

            </div>
            

            </>
        )
}