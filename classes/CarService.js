class CarService {
    static DefaultWorkingHours = {
        from: '9:00',
        till: '23:00',
    }
    constructor(name, workingHours) {
        this.name = name;
        this.workingHours = workingHours || CarService.DefaultWorkingHours;
    }

    repairCar (carName) {
        if (!carName) {
            console.error('Вам необходимо указать название машины, чтобы ее отремонтировать');
        } else {
            this.time = new Date();
            this.time = this.time.getHours();
            this.minTime = this.workingHours.from.split(':')[0]
            this.maxTime = this.workingHours.till.split(':')[0]
            console.log(this.time);
            console.log(this.minTime);
            console.log(this.maxTime);
            console.log((this.time > this.minTime) && (this.time < this.maxTime));
            !((this.time > this.minTime) && (this.time < this.maxTime)) ? console.log('К сожалению, мы сейчас закрыты. Приходите завтра') : console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`);
            
        }
    }
}

let carService = new CarService('RepairCarNow');
carService.repairCar('bmw')