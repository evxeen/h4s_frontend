import { IDoctor, IDoctorTime } from "../../../model";

const Doctor = (doctor: IDoctor): JSX.Element => {

   const {fullName, specialization, office, receptionTime} = doctor;

  return (
      <div>
         <div>{fullName}</div>
         <div>Специальность: {specialization}</div>
         <div>Кабинет: {office}</div>
         <div>
            Время приема:
            {receptionTime.map((date: IDoctorTime) => (
                <div key={date.day}>
            день: {date.day}, время: {date.time}
          </div>
            ))}
         </div>
      </div>
  );
}

export default Doctor;
