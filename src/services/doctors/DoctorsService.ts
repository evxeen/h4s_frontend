import { IDoctor } from "../../model"
import { authenticatedGetRequest } from "../http/HttpService"

enum DoctorsUrl {
    doctors = 'https://h4s-backend.herokuapp.com/api/doctor'
}

export const getDoctors = (): Promise<IDoctor[]> => {
    return authenticatedGetRequest(DoctorsUrl.doctors)
}