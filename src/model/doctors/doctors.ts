export interface IDoctor {
  fullName: string,
  id: number,
  office: number,
  receptionTime: IDoctorTime[],
  specialization: string,
}

export interface IDoctorTime {
  day: string;
  time: string;
}