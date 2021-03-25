module.exports = function(){
    //Переменые
    console.log("Переменые\n");

    let a = 42;
    let b = a;
    b++;
    console.log(`a = ${a}, b = ${b} a == b ${a == b}`);
    console.log('\n');

    arr1 = [1, 2, 3];
    arr2 = arr1;
    arr3 = [...arr1];
    arr2.push(4);
    console.log('arr1 ',arr1)
    console.log('arr2 ',arr2)
    console.log('arr3 ',arr3)
    console.log(`arr1 == arr2 ${arr1 == arr2}`);
    console.log(`arr1 == arr3 ${arr1 == arr3}`);
}()
