import {useEffect, useState} from "react";
import Doctor from "../Doctor/Doctor";

function Doctors() {
   const [doctorsData, setDoctorsData] = useState([]);

   const getDoctorsInfo = async () => {
      const doctors = await fetch('https://h4s-backend.herokuapp.com/api/doctor')
      const res = await doctors.json();
      setDoctorsData(res);
   }

   useEffect(() => {
      getDoctorsInfo();
   }, [])

   return (
      <Doctor doctor={doctorsData}/>
   );
}

export default Doctors;
