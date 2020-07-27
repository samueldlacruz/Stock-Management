import { EmployeeModal } from '../features/employees/Employee.type';
import Axios from 'axios';

const baseUrl = 'https://stockmanagement2018.azurewebsites.net/api/employees/';

export const getEmployees = async (): Promise<EmployeeModal[]> => {
  const response = await Axios.get<EmployeeModal[]>(baseUrl);
  return response.data;
}

export const postEmployee = (employee: EmployeeModal) => {
  const headers = {
    Accept: "application/json",
   "Content-Type": "application/json"
  }

  Axios.post<EmployeeModal>(baseUrl, employee, { headers });

}