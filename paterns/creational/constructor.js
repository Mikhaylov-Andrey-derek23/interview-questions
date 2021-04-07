console.log('Constructor');

console.log("Старый метод");
//Старый метод

function OldServer(name, ip){
    this.name = name;
    this.ip = ip;
}

OldServer.prototype.getUrl = function(){
    return `This server ${this.name} have url : ${this.ip}:8000`
}  
const aws1 = new OldServer('aws_1', '190:160:56');
console.log(aws1.getUrl());

console.log('\nНовый метод');
//Новый метод
class NewServer{
    constructor(name, ip){
        this.name = name;
        this.ip = ip;
    }
    
    getUrl(){
        return `This server ${this.name} have url : ${this.ip}:8000`
    }
}
const aws2 = new NewServer('aws_2', '196:25:141');
console.log(aws2.getUrl());