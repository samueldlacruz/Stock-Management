import { observable, action, runInAction } from 'mobx';
import { EmployeeModal } from './Employee.type';
import { getEmployees, postEmployee } from '../../api/employees';

export class EmployeesStore {
  @observable employees: EmployeeModal[] = []

  @observable isLoading = true;

  @action
  fetchEmployees = async () => {
   const employees = await getEmployees();

   runInAction(() => {
     this.employees = employees
     this.isLoading = false
   })
  }

  @action
  addEmployee = async (employee: EmployeeModal) => {
   postEmployee(employee);
   this.employees.push(employee);
  }

}