import { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
import axios from "axios";

function Doctors() {
  const [doctorsData, setDoctorsData] = useState([]);

  const getDoctorsInfo = async () => {
    const doctors = await axios.get("https://h4s-backend.herokuapp.com/api/doctor");
    setDoctorsData(doctors.data);
  };

  useEffect(() => {
    getDoctorsInfo();
  }, []);

  return (
      <>
        {doctorsData.map((doctor) => (
            <ul>
              <Doctor
                  key={doctor.id}
                  fullName={doctor.fullName}
                  specialization={doctor.specialization}
                  office={doctor.office}
                  receptionTime={doctor.receptionTime}
              />
            </ul>
        ))}
      </>
  );
}

export default Doctors;
