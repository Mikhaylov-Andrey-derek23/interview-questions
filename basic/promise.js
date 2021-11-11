module.exports = function(){
    console.log('Promis\n\n')

    console.log('request data')

    // setTimeout(()=>{
    //     console.log('Preparing data')
    //     const backendDate = {
    //         server : "aws",
    //         port : 2000,
    //         status: "working"
    //     }
    //     setTimeout(()=>{
    //         backendDate.modified = true;
    //         console.log('Data received', backendDate)
    //     }, 2000)
    // }, 2000)

    const p = new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log('Preparing data')
            const backendDate = {
                server : "aws",
                port : 2000,
                status: "working"
            }
            resolve(backendDate)
        }, 2000)
    
    });

    p.then((backendDate)=>{
        console.log('Promise resolved')
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                        backendDate.modified = true;
                        resolve(backendDate)
                        // backendDate.modified = false;
                        // reject(backendDate)
                    }, 2000)
        })
    }).then((d)=>{
        d.fromPromice = true
        return d
    }).then((d)=>{
        console.log('Modified', d)
    }).catch(error=>{
        console.error('Error', error);
    }).finally(()=>{
        console.log('finish')
    });
}()