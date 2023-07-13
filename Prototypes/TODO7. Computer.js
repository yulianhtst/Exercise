function createComputerHierarchy() {
    //TODO: implement all the classes, with their properties
    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = Number(ram);
            this.hardDiskSpace = Number(hardDiskSpace)

        }
    }
    class Desktop extends Computer{
        constructor(keyboard,monitor){
            this.keyboard=keyboard;
            this.monitor=monitor;
        }
    }








    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}


let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);
