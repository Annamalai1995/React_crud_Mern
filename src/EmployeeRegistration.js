import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { create } from './TemporyValues'

export const RegistrationForm=()=>
    
{
    const[userdetail,setUserdetail]=useState({
        "empid":0,
        "empname":"",
        "empusername":"",
        "emppassword":"",
        "empdesignation":"",
        "empexp":0,
        "empsalary":0
    })

    const track=(mydatas)=>
    {
        const{name,value}=mydatas.target
        setUserdetail((adding)=>
        {
            return{
                ...adding,
                [name]:value
            }
        })
    }


    const Register=()=>
    {
        alert(" welcome to zealous Tech corp"+JSON.stringify(userdetail))
        create(userdetail);
    }

    const Cancel=()=>
    {
        alert(" Rejected.....!")
    }
    return(
        <>
        <div className="container-fluid mt-3 ">
            <h3 className='text-center text-info text-uppercase text-decoration-underline'>New Employee Registration </h3>
            <div className='row justify-content-center' style={{backgroundColor:'palevioletred'}}>
                <div className='col-lg-7 col-md-10 col-sm-12 '>
                    <div className='form-group mt-2'>
                        <label className='fw-bolder'>Employee Id</label>
                        <input className='form-control' 
                        name='empid' 
                        placeholder='Employee Registration Id number'
                        onChange={track}
                        value={userdetail.empid}
                        />
                    </div>
                    <div className='mt-3'>
                        <label className='fw-bold'>Employee Name</label>
                        <input className='form-control' 
                        name='empname' 
                        placeholder='enter your valid name'
                        onChange={track}
                        value={userdetail.empname}
                        />
                    </div>
                    <div className='mt-3'>
                        <label className='fw-bold'>Employee Username</label>
                        <input className='form-control' 
                        name='empusername' 
                        placeholder='enter your valid name'
                        onChange={track}
                        value={userdetail.empusername}
                        />
                    </div>
                    <div className='mt-3'>
                        <label className='fw-bold'>Employee Password</label>
                        <input className='form-control' 
                        name='emppassword'  
                        placeholder='enter your valid name'
                        onChange={track}
                        value={userdetail.emppassword}
                        />
                    </div>
                    <div className='mt-3'>
                        <label className='fw-bold'>Employee Designation</label>
                        <select className='form-select' name='empdesignation'
                        onChange={track}
                        value={userdetail.empdesignation}
                        >
                            <option selected hidden>Select any one</option>
                            <option>Java STACK</option>
                            <option>MERN STACK</option>
                            <option>Front-end Developer</option>
                            <option>Web -Developer</option>
                            <option>Automation Testing</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div className='mt-3'>
                        <label className='fw-bold'>Employee Experience</label>
                        <input className='form-control' 
                        type='text' 
                        name='empexp' 
                        placeholder='Experience: y/m'
                        onChange={track}
                        value={userdetail.empexp}
                        />
                    </div>
                    <div className='mt-3'>
                        <label className='fw-bold'>Employee Salary</label>
                        <input className='form-control' 
                        name='empsalary' 
                        placeholder='enter your valid name'
                        onChange={track}
                        value={userdetail.empsalary}
                        />
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