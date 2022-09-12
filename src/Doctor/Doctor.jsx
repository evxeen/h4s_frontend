function Doctor({ doctor }) {
   const {fullName, specialization, office, receptionTime} = doctor;

  return (
      <div>
         <div>{fullName}</div>
         <div>Специальность: {specialization}</div>
         <div>Кабинет: {office}</div>
         <div>
            Время приема:
            {receptionTime.map((date) => (
                <div key={date.day}>
            день: {date.day}, время: {date.time}
          </div>
            ))}
         </div>
      </div>
  );
}

export default Doctor;
