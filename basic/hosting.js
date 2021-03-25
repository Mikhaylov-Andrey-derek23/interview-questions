module.exports = function(){
    console.log('Hosting объявление переменных');
    //Hosting объявление переменных и их места 
    console.log('var')
    try{
        console.log('a = ',a)

    }catch(e){
        console.log(e)
    }
    var a = 45;
    try{
        console.log('a = ',a)

    }catch(e){
        console.log(e)
    }

    try{
        console.log('b = ',b)

    }catch(e){
        console.log(e)
    }
    console.log('\n let');
    let b = 45;
    try{
        console.log('b = ',b)

    }catch(e){
        console.log(e)
    }
    console.log('\n Function Expression & Function Declaration');
    console.log('Declaration');
    try{
        console.log(`square(25) = ${square(25)}`) 
    }catch(e){
        console.log(e)
    }
    function square(a){
        return a**2
    }
    try{
        console.log(`square(25) = ${square(25)}`) 
    }catch(e){
        console.log(e)
    }

    console.log('\nExpression');
    try{
        console.log(`square2(25) = ${square2(25)}`) 
    }catch(e){
        console.log(e)
    }
    const square2 = function(a){
        return a**2
    }
    try{
        console.log(`square2(25) = ${square2(25)}`) 
    }catch(e){
        console.log(e)
    }



    
}()