abstract class Department {
  static fiscalYear = 2020;
  protected readonly id: string;
  private name: string;
  protected employees: string[] = [];

  constructor(id: string, n: string) {
    this.id = id
    this.name = n;
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
    console.log(this.name);
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT" + this.id)
  }
}

class AccountingDept extends Department {
  private lastReport: string;

  private static instance: AccountingDept

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  static getInstance() {
    if (AccountingDept.instance) {
      return this.instance
    }
    this.instance = new AccountingDept('iddddd', [])
    return this.instance
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  describe() {
    console.log("Accounting" + this.id);
  }
}

// const dep1 = new Department("22", "Accounting");
// dep1.addEmployee("max");
// dep1.addEmployee("charles");
// console.log(dep1);

// dep1.describe();
// dep1.printEmployeeInformation();

const itDep = new ITDepartment("22", ["Max"]);
console.log(itDep);

// class Department2 {
//   private employees: string[] = [];
//   // Shorthand initialization
//   constructor(public n: string) {}

//   describe(this: Department) {
//     // console.log('Dep:' + this.name)
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
