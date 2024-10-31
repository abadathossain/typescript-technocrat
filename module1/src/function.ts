const addArrow=(num1:number, num2:number):number=>{
    return num1+num2
}
const result=addArrow(2,3);
console.log(result)


const poorUser={
    name:'Abadat',
    balance:0,
    addBalance(balance:number):number{
        return this.balance + balance;
    }
}