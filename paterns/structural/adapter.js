module.exports = function(){
    console.log('Adapter')
    //Adapter нуже для объедение различных интерфейсов разных класов, путем инцилазации в конструкторе классе адптера экземпляров других классов    

    class OldCal{       
        operation(a1, a2, operation){
            switch(operation){
                case 'add' : return a1 + a2;
                case 'sub' : return a1 - a2;
                default : return NaN 
            }
        }
    }

    class NewCal{
        add(a1, a2){
            return a1 + a2
        }
        sub(a1, a2){
            return a1 - a2
        } 
    }

    class AdapterCal{
        constructor(){
            this.cal = new NewCal;
        }
        operation(a1, a2, operation){
            switch(operation){
                case 'add' : return this.cal.add(a1, a2);
                case 'sub' : return this.cal.sub(a1, a2);
                default : return NaN 
            }
        }
    }

    const oldCal = new OldCal();
    const newCal = new NewCal();
    const adaptCal = new AdapterCal();
    console.log(oldCal.operation(10, 5, 'add'))
    console.log(newCal.add(5, 10));
    console.log(adaptCal.operation(25, 10, 'sub'));
    

}()