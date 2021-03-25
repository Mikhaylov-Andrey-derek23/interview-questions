module.exports = function(){
    console.log('Prototype');
    //Prototype Прототайп
    function Cat(name, color){
        this.name = name;
        this.color = color;
    }
    Cat.prototype.sayCat = function(word){
        console.log(`The ${this.color} cat has name ${this.name} speak ${word}`)
    }
    const cat = new Cat('Kot', 'white');
    cat.sayCat('May');
    console.log(Cat.prototype);
    console.log(cat);
    console.log(cat.__proto__)
    console.log(cat.__proto__ == Cat.prototype)
    console.log(cat.constructor)
    console.log(Object.getPrototypeOf(Cat));
    console.log('\n');

    function Person(){};
    Person.prototype.legs = 2;
    Person.prototype.skin = 'white';
    const person = new Person;
    console.log(person);
    console.log(person.legs);
    person.name = 'Derek';
    console.log(person);
    console.log(person.hasOwnProperty('legs'));
    console.log(person.__proto__);

    console.log('\n Object create');
    //Object create
    let proto = {
        year : 2019
    };

    const myEear = Object.create(proto);
    console.log(myEear.year);
    console.log(myEear.__proto__);
    proto.year = 1256;
    console.log(myEear.year);
    proto = {year : 23};
    console.log(myEear.year);


}() 