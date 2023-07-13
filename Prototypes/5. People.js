function solution() {


    function Employee(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
        this.currentTask = 0;
    }
    Employee.prototype.work = function work() {
        console.log(this.tasks[this.currentTask]);
        this.currentTask++
        if (this.tasks.length - 1 < this.currentTask) {
            this.currentTask = 0
        }
        // console.log(this.tasks[this.currentTask]);
        // if (this.currentTask !== this.tasks.length - 1) {
        //     if (this.tasks.length - 1 > this.currentTask) {
        //         this.currentTask++
        //     }
        // }else{
        //     this.currentTask=0
        // }
    }
    Employee.prototype.collectSalary = function collectSalary() {
        console.log(`${this.name} received ${this.salary} this month.`);
    }


    Junior.prototype = Object.create(Employee.prototype)
    Junior.prototype.constructor = Employee

    function Junior(...args) {
        Employee.call(this, ...args)

        this.tasks.push(`${this.name} is working on a simple task.`)
    }
    Senior.prototype = Object.create(Employee.prototype);
    Senior.prototype.constructor = Employee

    function Senior(...args) {
        Employee.call(this, ...args)
        let arr = [`${this.name} is working on a complicated task.`, `${this.name} is taking time off work.`, `${this.name} is supervising junior workers.`];

        arr.forEach(x => this.tasks.push(x))

    }
    Manager.prototype = Object.create(Employee.prototype);
    Manager.prototype.constructor = Employee

    function Manager(...args) {
        Employee.call(this, ...args)
        let arr = [`${this.name} scheduled a meeting.`, `${this.name} is preparing a quarterly report.`];
        this.dividend = 0
        arr.forEach(x => this.tasks.push(x))
    }
    Manager.prototype.collectSalary = function collectSalary() {
        console.log(`${this.name} received ${this.salary + this.dividend} this month.`);

    }


    return { Employee, Junior, Senior, Manager }
}
const classes = solution();
const junior = new classes.Junior('Ivan', 25);
junior.work();
junior.work();
junior.salary = 5811;
junior.collectSalary();
const sinior = new classes.Senior('Alex', 31);
sinior.work();
sinior.work();
sinior.work();
sinior.work();
sinior.salary = 12050;
sinior.collectSalary();
const manager = new classes.Manager('Tom', 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();