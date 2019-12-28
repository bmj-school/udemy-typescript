class Department {

    private readonly id: string
    private name: string
    private employees: string[] = []

    constructor(id:string, n: string) {
        this.id = id
        this.name = n
    }

    describe(this: Department) {
        console.log('Dep:' + this.name + this.id)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const dep1 = new Department('22', 'Accounting')
dep1.addEmployee('max')
dep1.addEmployee('charles')
console.log(dep1)

dep1.describe()
dep1.printEmployeeInformation()



class Department2 {
    private employees: string[] = []
    // Shorthand initialization
    constructor(public n: string) {
    }

    describe(this: Department) {
        // console.log('Dep:' + this.name)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}