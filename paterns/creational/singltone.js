module.exports = function(){
    console.log('Singltone');
    //Singltone нужен если мы создаенм только один объект класса и запрещаем создоваить другие, пример класс для работы с БД, чтоб не плодить подключения  
    class Datebase{
        constructor(data){
            if(Datebase.exists){
                return Datebase.instance;
            }
            Datebase.instance = this,
            Datebase.exists = true,
            this.data = data 
        }

        getData(){
            console.log(this.data);
        }
    }

    const mongo = new Datebase('MongoDB')
    mongo.getData();
    const msql = new Datebase('Msql');
    msql.getData();

}()