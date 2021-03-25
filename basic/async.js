module,exports = function(){
    console.log("Async Асихроность")
    //Async Асихроность CallStak -> Callbak.Q -> Event.loop -> Callstak -> Trash   

    const fun1 = () => {
        console.log('First')
    }

    const fun2 = () => {
        console.log('Second')
    }

    const fun3 = () => {
        console.log('Third')
    }
    fun1();
    fun2();
    fun3();

    console.log('\nВключенние асихроности')
    fun1();
    setTimeout(fun2, 0);
    fun3();


}()