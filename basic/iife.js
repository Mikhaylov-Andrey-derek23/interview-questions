module.exports = function(){
    console.log('Immediately Invoked Function Expression немедлено вызываемая функция')
    //Immediately Invoked Function Expression немедлено вызываемая функция
    const result = [];

    for(var i = 0; i<5; i++){
        result.push(function(){
            console.log(i)
        })
        
    }
    result.map(e => {
        e()
    })
    console.log('\n')
    resultSecond = []
    for(var i = 0; i<5; i++){
       (function(){
           var j = i;
           resultSecond.push(function(){
               console.log(j)
           })
       })()
    }

    resultSecond.map(e =>{
        e()
    })
}()