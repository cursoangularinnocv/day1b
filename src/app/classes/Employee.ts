import IWorker from '../interfaces/IDeductible';

export class Developer implements IWorker {
  department: string;
  name: string;
  surname: string;
  salary: number;

  constructor(name: string, surname: string, salary: number) {
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.department = 'coding';
  }

  getSalary(): number {
    return this.salary;
  }
}

export class Devops implements IWorker {
  department: string;
  name: string;
  surname: string;
  salary: number;

  constructor(name: string, surname: string, salary: number) {
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.department = 'devops';
  }

  getSalary(): number {
    return this.salary;
  }
}