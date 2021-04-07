console.log("Factory Фабрика");
//Factory Фабрика позволяет с помощью класса создовать другие объекты 

class SimpleMembership{
    constructor(name){
        this.name = name;
        this.coast = 50;
    }
}

class StandardMembership{
    constructor(name){
        this.name = name;
        this.coast = 150;
    }
}

class PremiumMembership{
    constructor(name){
        this.name = name;
        this.coast = 500;
    }
}

class MemberFactory {
    constructor(){
        this.List = {
            simple : SimpleMembership,
            standard : StandardMembership,
            premium : PremiumMembership
        }
    }

    create(name, type = 'simple'){
        const Membership = this.List[type] || this.List.simple;
        const member = new Membership(name);
        member.type = type;
        member.define = function(){
            console.log(`${this.name} (${this.type}) ${this.coast}`);
        }

        return member;
    }
}

const factory = new MemberFactory();

const members = [
    factory.create('Vladilen', 'simple'),
    factory.create('Elena', 'premium'),
    factory.create('Vasy', 'standard'),
    factory.create('Peter'),
    factory.create('Jack', 'dvsdvf')
]

members.forEach(e =>{
    // console.log(e);
    e.define();

})