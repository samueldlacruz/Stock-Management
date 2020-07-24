import { EmployeeModal } from '../features/employees/Employee.type';

const baseUrl = 'https://stockmanagement2018.azurewebsites.net/api/employees/';

export async function getEmployees(): Promise<EmployeeModal[]> {
    const response = await fetch(baseUrl);
    const employees = await response.json();

    return employees;
}

export async function addEmployee(paylaod: EmployeeModal): Promise<any> {
    await fetch(baseUrl, {
      method: "POST",
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(paylaod)
     });
 }
