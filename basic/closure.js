module.exports = function(){
    console.log("Замыкание")
    //Замыкание
    function sayHelloy(name){
        const message = `Helloy ${name}`;
        return function(){
            console.log(message);
        }
    }
    const elena = sayHelloy('Elena')();
    const igor = sayHelloy('Igor')();

    function createFraemworkManger(){
        const items = ['React', 'Angular'];
        return {
            show : function(){
                console.log(items.join(' '));
            },
            add : function(item){
                items.push(item);
            }
        }
    }
    
    const manager = createFraemworkManger();
    manager.show();
    manager.add('Vanila');
    manager.show();

    console.log('\nЗадачка с Settimout')
    //Задачка с Settimout
    fb = [1, 2, 3, 5, 8, 12]
    for(var i = 0; i < fb.length; i++ ){
        (function(g){
            setTimeout(function(){
                console.log(`fb[${g}] = ${fb[g]}`)
            }, 1500)
        })(i)

    }
}()