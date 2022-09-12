import { useEffect, useState } from "react";
import Doctor from "./Doctor/Doctor";
import { getDoctors } from "../../services";
import { IDoctor } from "../../model";


const Doctors = (): JSX.Element => {
  const [doctorsData, setDoctorsData] = useState<IDoctor[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getDoctorsInfo = async () => {
    try {
      setLoading(true);
      const data = await getDoctors();
      console.log(data, 'data')
      setDoctorsData(data);
    } catch {
      // обработка ошибок
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDoctorsInfo();
  }, []);

  return (
      <div>
        {
          isLoading
          ? <h1>Loading...</h1>
          : doctorsData.map((doctor: IDoctor) => (
            <Doctor
                key={doctor.id}
                { ...doctor }
            />
          ))
        }
      </div>
  );
}

export default Doctors;
