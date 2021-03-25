module.exports = function(){
    console.log('Context контекст функции');
    //Context контекст функции

    const person = {
        surname : "Старк",
        know : function(what , name){
            console.log(`Ты ${what} знаешь ${name} ${this.surname}`);
        }
    }

    person.know('все', 'Бран');
    person.know.call({surname : "Сноу"}, 'ничего', 'Джон');
    person.know.apply({surname : "Сноу"}, ['ничего', 'Джон']);
    person.know.bind({surname : "Сноу"}, 'ничегооооооо', 'Джон')();

    console.log('\nЯвный');
    const Person = function(name, age){
        this.name = name;
        this.age = age; 
        console.log(this) 
    }

    const elena = new Person('Elena', 20);

    const obj = {num : 42};
    function LogThis(){
        console.log(this);
    }
    LogThis.call(obj);
    LogThis.apply(obj);
    LogThis.bind(obj)();

    console.log('\nНе явный');

    const animal = {
        legs : 4,
        logThis : function(){
            console.log(this)
        }

    } 

    animal.logThis();

    function Cat(colour){
        this.colour = colour;
        (() =>{
            console.log(`Cat is ${this.colour}`);
        })()
    }

    new Cat('red'); 



}()