import { observable, action, runInAction } from 'mobx';
import { EmployeeModal } from './Employee.type';
import { getEmployees, postEmployee, deleteEmployee } from '../../api/employees';

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
  const newEmployee = await postEmployee(employee);
   this.employees.push(newEmployee);
  }

  @action
  removeEmployee = async (id: number | undefined) => {
    deleteEmployee(id);
    this.employees = this.employees.filter(e => e.id !== id);
  }

}