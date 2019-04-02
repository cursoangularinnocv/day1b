import { Component } from '@angular/core';
import { Developer } from './classes/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  theEmployee: Developer;
  employeeFullName: string;
  employees: Array<Developer> = [
    new Developer('Javi', 'Aceña', 150000),
    new Developer('Dani', 'Test', 90000),
    new Developer('Milaydis', 'Test', 95000)
  ]
  showList = !true

  constructor() {
    this.theEmployee = new Developer('Javi', 'Aceña', 150000);
    this.employeeFullName = this.showEmployeeDetails(this.theEmployee);
  }

  showTitle(title: string) {
    // if (typeof title !== "string")  throw new TypeError("you have the wrong type")
    console.log(title)
  }

  switchList(): void {
    this.showList = !this.showList;
  }

  showEmployeeDetails(employee: Developer): string {
    return `${employee.name} ${employee.surname}`
  }
}
