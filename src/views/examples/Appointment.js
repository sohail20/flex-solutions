import React, {useState, useEffect } from 'react';
import axios from 'axios';
import AppointmentHeader from 'components/Headers/AppointmentHeader';
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar';
import swal from 'sweetalert';
function Appointment(props) {
    const [Loading, setLoading] = useState(true);
    const [DoctorData, setDoctorData] = useState([]);
    useEffect(()=>{
        axios.get("doctors").then((response)=>{
            setDoctorData(response.data.doctors)
            setLoading(false)
        }).catch((err)=>{
            swal("Alert!",err.message,"warning")
        })
    },[])
    return (
        <>
            <ExamplesNavbar/>
            {
                Loading?<p>Loading....</p>:<AppointmentHeader DoctorData={DoctorData}/>
            }
            
        
        </>
    );
}

export default Appointment;