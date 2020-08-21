import { EmployeeModal } from '../features/employees/Employee.type';
import Axios from 'axios';

const baseUrl = 'https://stockmanagement2017.azurewebsites.net/api/employees/';

const headers = {
  Accept: "application/json",
 "Content-Type": "application/json"
}

export const getEmployees = async (): Promise<EmployeeModal[]> => {
  const response = await Axios.get<EmployeeModal[]>(baseUrl);
  return response.data;
}

export const getEmployeeById = async (id: number): Promise<EmployeeModal> => {
  const response = await Axios.get<EmployeeModal>(`${baseUrl} ${id}`);
  return response.data;
}

export const getEmployeeNameById = async (id: number) => {
  const response = await Axios.get<EmployeeModal>(`${baseUrl} ${id}`);
  return response.data.name;
}

export const postEmployee = async (employee: EmployeeModal) => {
 const newEmployee = await Axios.post<EmployeeModal>(baseUrl, employee, { headers });
 return newEmployee.data;
}

export const deleteEmployee = async (id: number | undefined) => {
  const employeeUrl = `${baseUrl}/${id}`;

  await Axios.delete<EmployeeModal>(employeeUrl);
}

export const updateEmployee = async (employee: EmployeeModal) => {
  const employeeUrl = `${baseUrl}/${employee.id}`;

  const updatedemployee = await Axios.put<EmployeeModal>(employeeUrl, employee, { headers });
  return updatedemployee.data;
}