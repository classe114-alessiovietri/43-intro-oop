/* 
    CLASSI
*/
class Car {

    constructor (marca, modello = 'XXX') {
        this.brand = marca;
        this.model = modello;
    }

    fullModel() {
        return this.brand + ' ' + this.model;
    }

}

class Person {

    constructor (nome, cognome, email = 'XXX@YYY.ZZZ', macchina = null) {
        this.firstName = nome;
        this.lastName = cognome;
        this.email = email;
        this.car = macchina;
    }

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }

}

const macchina = new Car('Hyundai', 'i10');
console.log('macchina', macchina, typeof macchina);
console.log('Il modello completo di macchina è:', macchina.fullModel());

const macchinaDue = new Car('Audi');
console.log('macchinaDue', macchinaDue, typeof macchinaDue);

const stefano = new Person('Stefano', 'Dellamore', 'stefano@boolean.careers', macchina);
console.log('stefano', stefano, typeof stefano);
console.log('Nome completo di Stefano:', stefano.fullName());

const alessio = new Person('Alessio', 'Palmieri');
console.log('alessio', alessio, typeof alessio);
console.log('Nome completo di Alessio:', alessio.fullName());

/* 
    FUNZIONI
*/
function createPersonObject(nome, cognome, email = 'XXX@YYY.ZZZ') {
    const newPersonObject = {
        firstName: nome,
        lastName: cognome,
        email: email,
        fullName() {
            return this.firstName + ' ' + this.lastName;
        }
    };

    return newPersonObject
}

function getPersonFullName(person) {
    return person.firstName + ' ' + person.lastName;
}