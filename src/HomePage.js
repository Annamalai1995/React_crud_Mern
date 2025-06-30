import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { RegistrationForm } from './EmployeeRegistration';
import { ReadingEmployee } from './Read';
import { Updating } from './update';
import { deleting, fetchexact, list } from './TemporyValues';

export const MainPage=()=>
{
    const[temparray,setTemparray]=useState([])
    const[createview,setCreateview]=useState(false);
    const[readview,setReadview]=useState(false);
    const[pos,setPos]=useState(0);
    const[updateview,setUpdateview]=useState(false);
    const[obj,setObj]=useState({})

    const setvalue=()=>
    {
        setTemparray(list)


    }
    useEffect(()=>
    {
        setvalue()
    })
    return (
        <>
        <div className='container row justify-content-center'>
            {
            (createview)?
            <>
            <RegistrationForm/>
            <button className='btn btn-outline-secondary' 
            onClick={()=>
            {
                setCreateview(false)
            }
            }
            >
                Back
            </button>
            
            </>
            :
            (readview)?
            <>
            <ReadingEmployee ind={pos}/>
            <button className='btn btn-outline-secondary col-5 mt-5'
            onClick={
                ()=>
                {
                    setReadview(false)

                }
            }
            >
                back

            </button>

    
            </>
            :
            (updateview)?
            <>
            <Updating who={pos} mention={obj}/>
            <button className='btn btn-outline-secondary'
            onClick={()=>
            {
                setUpdateview(false)
            }
            }
            >
                back

            </button>
            </>
            :
            
            <>
            <button className='btn btn-outline-secondary' 
            onClick={()=>
            {
                setCreateview(true)
            }
            }
            >
                NEW REGISTER EMPLOYEE DETAILS

            </button>
            <div className='table-responsive-md mt-5'>
                <table className='col lg-8 col-md-10  col-sm-12'>
                    <thead>
                        <tr>
                            <td>Employee ID</td>
                            <td>Employee NAME</td>
                            <td>EMployee USERNAME</td>
                            <td>EMployee PASSWORD</td>
                            <td>EMPLOYEE DESIGNATION</td>
                            <td>EMPLOYEE EXPERIENCE</td>
                            <td>Employee SALARY</td>
                            <td>ACTION</td>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                temparray.map((ele,index)=>
                                (
                                    <tr>
                                        <td>{ele.empid}</td>
                                        <td>{ele.empname}</td>
                                        <td>{ele.empusername}</td>
                                        <td>{ele.emppassword}</td>
                                        <td>{ele.empdesignation}</td>
                                        <td>{ele.empexp}</td>
                                        <td>{ele.empsalary}</td>
                                        <td>
                                           <button className='btn btn-outline-info'
                                           onClick={()=>
                                           {
                                            setReadview(true)
                                            setPos(index)

                                           }
                                           }
                                           >
                                            READ

                                           </button>
                                           <button  className='btn btn-outline-warning'
                                           onClick={()=>
                                           {
                                            setUpdateview(true)
                                            setPos(index)
                                            const temp=fetchexact(ele.empname)
                                            setObj(temp);
                                           }
                                           }
                                           >
                                            EDIT
                                           </button>
                                           <button className='btn btn-outline-danger'
                                           onClick={()=>
                                           {
                                            setTemparray(deleting(index))
                                           }
                                           }
                                           >REMOVE</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                </table>
            </div>
            
            </>
                        

            }
        </div>
        </>
    )


}