import { observable, action, runInAction } from 'mobx';
import { EmployeeModal } from './Employee.type';
import { getEmployees, postEmployee, deleteEmployee, updateEmployee } from '../../api/employees';

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
  editEmployee = async (employee: EmployeeModal) => {
   const updatedEmployee = await updateEmployee(employee);
   
   runInAction(() => {
     this.employees = this.employees.map(item => item.id === updatedEmployee.id ? updatedEmployee : item);
     this.fetchEmployees();
   })
  }

  @action
  removeEmployee = async (id: number | undefined) => {
    deleteEmployee(id);
    this.employees = this.employees.filter(e => e.id !== id);
  }

}