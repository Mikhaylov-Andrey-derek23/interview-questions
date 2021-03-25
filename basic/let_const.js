module.exports = function(){
    console.log('Let and Const\n');
    //Let and Const
    //Let
    console.log('Let')
    let a = 'Varibale A';
    let b = 'Varibale B';
    console.log(`
    Scope A = ${a}
    Scope B = ${b}
`) 
    {
        a = 'New varibale A';
        let b = 'Local varibale B'
        console.log(`
            Scope A = ${a}
            Scope B = ${b}
        `)
    }
    console.log(`
            Scope A = ${a}
            Scope B = ${b}
    `)
    console.log('\n');

    console.log('Const');
    //Const
    const PORT = 8080;
    try{
        PORT = 2000
    }catch(e){
        console.log(e)
    }
    const arr = ['JavaScript', 'is', 'Awesome']
    console.log(arr.join(' '));
    arr.push('!');
    console.log(arr.join(' '));
    arr.pop();
    arr[0] = 'JS';
    console.log(arr.join(' '));
    const obj = {

    };
    console.log(obj);
    obj.name = 'Derek';
    obj['age'] = 34;
    console.log(obj);
    delete obj.name;
    console.log(obj)
     
}()