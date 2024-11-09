{
    // 
    interface User{
        name:string;
        age:number;
        email?:string
    }
    
    const user:User={
        name:"Abadat",
        age:36,
        email:'a@gamil.com'
    }
    console.log(user)

// interface of array


const roll:number[]=[1,2,5,4]
// console.log(roll)

type Roll=number[]
const roll1:Roll=[1,5,4,8,6]
// console.log(roll1)

interface Roll2{
    [index:number]:number
}
const roll2:Roll2=[7,5,8,6,9]
// console.log(roll2)


// interface of function

interface Add{
    (num1:number, num2:number):number
}

const add:Add=(num1,num2)=>{
    return num1+num2
}
const result=add(2,5)
console.log(result)


    // 
}