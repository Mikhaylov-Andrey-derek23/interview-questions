module.exports = function(){
    console.log('Prototype прототип');
    //Prototype прототип позволяет создовать объекты на основе старых 
    const car = {
        wheels : 4,
        init(){
            console.log(`У меня есть ${this.wheels} колеса, мой владелиц ${this.owner}`);
        }
    }

    const carOwner = Object.create(car, {
        owner : {
            value : 'Ben'
        }
    });
    carOwner.init();
    console.log(carOwner.__proto__ );
    console.log(carOwner.prototype)
    console.log(carOwner.__proto__ === car)





}()
