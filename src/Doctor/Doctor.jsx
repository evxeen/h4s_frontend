function Doctor({doctor}) {
   return (
       <section>
          {doctor.map((doctor) => (
              <div key={doctor.id}>
                 <div>{doctor.fullName}</div>
                 <div>Специальность: {doctor.specialization}</div>
                 <div>Кабинет: {doctor.office}</div>
                 <div>Время приема: {doctor.receptionTime.map((date) => (
                     <span key={date.day}> день: {date.day}, время: {date.time}</span>
                 ))}</div>
              </div>
          ))}
       </section>
   );
}

export default Doctor;

