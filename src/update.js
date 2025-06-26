import { useState } from "react";
import { update } from "./TemporyValues";
export const Updating=(Name)=>
{
    const[pos,setPos]=useState(Name.who);
    const[userdetail,setUserdetail]=useState({
        "empid":Name.mention.empid,
        "empname":Name.mention.empname,
        "empusername":Name.mention.empusername,
        "emppassword":Name.mention.emppassword,
        "empdesignation":Name.mention.empdesignation,
        "empexp":Name.mention.empexp,
        "empsalary":Name.mention.empsalary
    })
     const track=(mydatas)=>
    {
        const{name,value}=mydatas.target
        setUserdetail((adding)=>
        {
            return{
                ...adding,[name]:value
            }
        })
    }
    const Register=()=>
    {
        alert("welcome to zelaous"+JSON.stringify(userdetail))
        update(userdetail,pos)
        alert("updated successfully")

    
    }
    const Cancel=()=>
    {
        alert("REJECT")
    }
    return(
        <>
        <div className="container-fluid mt-4">
            <h3 className='text-center text-primary text-uppercase text-decoration-underline'>New Employee Register</h3>
            <div className='row justify-content-center' style={{backgroundColor:'black'}}>
                <div className='col-lg-7 col-md-10 col-sm-12'>
                    <div className='form-group mt-2'>
                        <label>Employee ID</label>
                        <input className='form-control' name='empid'
                        placeholder='Employee Registratin ID'
                        onChange={track} value={userdetail.empid}/>
                    </div>
                    <div className='mt-3'>
                        <label className='fw-bold'>Employee Name</label>
                        <input className='form-control' name='empname'
                        placeholder='Employee Name'
                        onChange={track} value={userdetail.empname}/>
                        
                    </div>
                    <div className='mt-3'>
                        <label className='fw-bold'>Employee User Name</label>
                        <input className='form-control' name='empusername'
                        placeholder='Employee UserName'
                        onChange={track} value={userdetail.empusername}/>
                        
                    </div>
                    <div className='mt-3'>
                        <label className='fw-bold'>Employee Password</label>
                        <input className='form-control' name='emppassword'
                        placeholder='Employee Password'
                        onChange={track} value={userdetail.password}/>
                        
                    </div>
                    <div className='mt-3'>
                        <label className='fw-bold'>Employee Designation</label>
                        <select className='form-select' name='empdesignation' 
                        onChange={track} value={userdetail.empdesignation}>
                            <option selected hidden>Select ANY ONE</option>
                            <option >JAVA STACK</option>
                            <option>MERN STACK</option>
                            <option>Web Developer</option>
                            <option>Automation Testing</option>
                        </select>
                        
                    </div>
                     <div className='mt-3'>
                        <label className='fw-bold'>Employee Experience</label>
                        <input className='form-control'  type="text"name='empexp'
                        placeholder='Employee Experience'
                        onChange={track} value={userdetail.empexp}/>
                        
                    </div>
                     <div className='mt-3'>
                        <label className='fw-bold'>Employee Salary</label>
                        <input className='form-control' name='empsalary'
                        placeholder='Employee salary'
                        onChange={track} value={userdetail.empsalary}/>
                        
                    </div>
                    <div className='row justify-content-center mt-2'>
                        <div className='col-3'>
                            <button className='btn btn-outline-success text-dark' onClick={Register}>Register</button>
                        </div>
                        <div className='col-3'>
                            <button className='btn btn-outline-danger text-dark' onClick={Cancel}>Cancel</button>
                        </div>
                    </div>
                    
                    
                    


                </div>
            </div>



        
        </div>
        </>
    )




}