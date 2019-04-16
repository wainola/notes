// naive implementation
function Vehicle(vehicleType){
    this.vehicleType = vehicleType || 'car';
    this.model = 'defaul';
    this.license = '0000-000';
}

const t = new Vehicle('car');
console.log(t)

const t2 = new Vehicle('truck');

t2.setModel = function(modelName){
    this.model = modelName
}
t2.setColor = function(color){
    this.color = color;
}

t2.setModel('CAT')
t2.setColor('blue')

console.log(t2)

// constructor to decorate
function MacBook(){
    this.costs = function(){
        return 997;
    }

    this.screenSzie = function(){
        return 11.6
    }
}

// decorator 1
function memory(macbook){
    const v = macbook.costs();
    macbook.costs = function(){
        return v + 75;
    }
}

// decorator 2
function engraving (macbook){
    const v = macbook.costs();
    macbook.costs = function(){
        return v + 200;
    }
}

// decorator 3
function insurance(macbook){
    const v = macbook.costs();
    macbook.costs = function(){
        return v + 250;
    }
}

const mb = new MacBook();
memory(mb)
engraving(mb)
insurance(mb)

console.log(mb.costs())
console.log(mb.screenSzie())

class Employee {
    constructor(name, age, dni){
        this.name = name;
        this.age = age;
        this.dni = dni;
        this.salary = 0;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    getDNI(){
        return this.dni;
    }
}


function addSalary(employee){
    const age = employee.getAge();
    employee.getSalary = function(){
        return age * 1000000
    }
}


const e = new Employee('nicolas', 31, '123456-7')
addSalary(e)
console.log(e)
console.log(e.getSalary())

// React Like Componente

function FormComponent(inputs, button){
    this.inputs = inputs;
    this.button = button;
}

function DecorateForm(formFunc){
    const buttonKeys = Object.keys(formFunc.button)

    if(buttonKeys.includes('handleClick')){
        formFunc.button = {
            ...formFunc.button,
        eventEmitter: function(){
            return 'Event Emitter'
            }
        }
    }
}

const inputs = [
    {type: 'text', name: 'nombre'},
    {type: 'password', name: 'contraseña'}
]

const button = {
    type: 'button', handleClick: function(){
        return {
            source: 'event',
            target: {
                value: 'Button event'
            }
        }
    }
}

const f = new FormComponent(inputs, button)
DecorateForm(f)
console.log('f::', f.button.eventEmitter())