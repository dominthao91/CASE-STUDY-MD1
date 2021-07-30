class Customer {
    id;
    name;
    email;
    numberPhone;
    numberPerson;
    time;
    constructor(id,name,email,numberPhone,numberPerson,time) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.numberPhone = numberPhone;
        this.numberPerson = numberPerson;
        this.time = time;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }

    getEmail(){
        return this.email;
    }
    setEmail(email){
        this.email = email;
    }

    getNumberPhone(){
        return this.numberPhone;
    }
    setNumberPhone(numberPhone){
        this.numberPhone = numberPhone;
    }

    getNumberPerson(){
        return this.numberPerson;
    }
    setNumberPerson(numberPerson){
        this.numberPerson = numberPerson;
    }

    getTime(){
        return this.time;
    }
    setTime(time){
        this.time = time;
    }

}
let arrrayCustomer = new Array();
let b = new Customer();
let arrayLocal = JSON.stringify(localStorage.getItem('arrayCustomer'));
let strings =arrayLocal.split(',')

alert(strings)
b.setId(strings[0]);
b.setName(strings[1]);
b.setEmail(strings[2]);
b.setNumberPhone(strings[3]);
b.setNumberPerson(strings[4]);
b.setTime(strings[5]);
arrrayCustomer.push(b);
