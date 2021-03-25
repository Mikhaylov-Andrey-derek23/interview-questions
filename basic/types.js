module.exports = function(){
    console.log('Types');
    //null, undefind, numbers, string, object, boolen, symbol
    
    console.log(typeof 0);
    console.log(typeof true);
    console.log(typeof 'Javascript');
    console.log(typeof undefined);
    console.log(typeof {});
    console.log(typeof Symbol('JS'));
    console.log(typeof null);
    console.log(typeof function(){});
    console.log(typeof NaN);
    console.log('\n');

    //Приведение типов

    let language = 'Javascript';
    language ? console.log(`The best language is ${language}`) : '';

    //Всегда к буленому значение false приводится '', 0 null NaN, false
    console.log(Boolean(''));
    console.log(Boolean('Js'));
    console.log(Boolean(0));
    console.log(Boolean([]));
    console.log(Boolean([].length));
    console.log('\n');


    //Строки и числа
    console.log(`1 + '2' = ${1 + '2'}`);
    console.log(`1 + parseInt('2') = ${1 + parseInt(2)}`)
    console.log(`"" -1 + 0 = ${"" -1 + 0}`);
    console.log(`'' * 3 + 1 = ${'' * 3 + 1}`);
    console.log(`4 + 10 + ' px' = ${4 + 10 + ' px'}`);
    console.log(`'42px' - 2 = ${'42px' - 2}`);
    console.log('\n');

    // == vs ===

    console.log(`'2' == 2  ${'2' == 2}`);
    console.log(`'2' === 2  ${'2' === 2}`);
    console.log(`parseInt('2') === 2  ${parseInt('2') === 2}`);

}()