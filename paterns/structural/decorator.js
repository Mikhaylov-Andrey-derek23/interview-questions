module.exports = function(){
    console.log('Decarator декаратор');
    //Decarator декаратор нужен для добавление нового функционала к экземпляру класса без измение структор класса
    
    class Server{
        constructor(ip, port){
            this.ip = ip;
            this.port = port; 
        }
        get getUrl(){
            return `https://${this.ip}:${this.port}`
        }
    }

    function asv(server){
        server.isAsv = true
        server.info = function(){
            console.log(`ASV server\n ${server.getUrl}`)
        }

        return server
    }

    function azura(server){
        server.isAzura = true
        server.port += 500;
        server.info = function(){
            console.log(`Azura server\n ${server.getUrl}`)
        }

        return server
    }
    
    const asvServer = asv(new Server('196.105.56', '1000'));
    asvServer.info();

    const azuraServer = azura(new Server ('123.56.47.12', 1000));
    azuraServer.info();


}()