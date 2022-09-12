function Doctor({doctor}) {
   return (
       <ul>
              <div>
                 <li>{doctor.fullName}</li>
                 <li>Специальность: {doctor.specialization}</li>
                 <li>Кабинет: {doctor.office}</li>
                 <li>Время приема: {doctor.receptionTime.map((date) => (
                     <span key={date.day}> день: {date.day}, время: {date.time}</span>
                 ))}</li>
              </div>
       </ul>
   );
}

export default Doctor;

