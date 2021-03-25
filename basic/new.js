module.exports = function(){
    console.log('New')
    //New
    function Cat(colour, name){
        this.colour = colour,
        this.name = name
    }
    
    const tom = new Cat('black', 'Tom');
    console.log(tom);

    function myNew(constructor, ...args){
        const obj = {}
        Object.setPrototypeOf(obj, constructor.prototype);
        return constructor.apply(obj, args) || obj
    }

    const mir = myNew(Cat, 'white', 'Mir');
    console.log(mir);
}()