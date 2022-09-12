import {useEffect, useState} from "react";
import Doctor from "../Doctor/Doctor";
import axios from "axios";

function Doctors() {
   const [doctorsData, setDoctorsData] = useState([]);

   const getDoctorsInfo = async () => {
      const doctors = await axios.get('https://h4s-backend.herokuapp.com/api/doctor');
      setDoctorsData(doctors.data);
   }

   useEffect(() => {
      getDoctorsInfo();
   }, [])

   return (
       <>
          {doctorsData.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor}/>
          ))}
       </>
   );
}

export default Doctors;
