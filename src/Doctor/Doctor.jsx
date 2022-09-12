function Doctor({ fullName, specialization, office, receptionTime }) {
  return (
      <li>
         <span>{fullName}</span>
         <span>Специальность: {specialization}</span>
         <span>Кабинет: {office}</span>
         <span>
            Время приема:
            {receptionTime.map((date) => (
                <span key={date.day}>
            день: {date.day}, время: {date.time}
          </span>
            ))}
         </span>
      </li>
  );
}

export default Doctor;
