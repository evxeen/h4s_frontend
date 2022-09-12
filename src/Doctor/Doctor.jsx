function Doctor({ fullName, specialization, office, receptionTime }) {
  return (
      <>
         <li>{fullName}</li>
         <li>Специальность: {specialization}</li>
         <li>Кабинет: {office}</li>
         <li>
            Время приема:
            {receptionTime.map((date) => (
                <span key={date.day}>
            день: {date.day}, время: {date.time}
          </span>
            ))}
         </li>
      </>
  );
}

export default Doctor;
