{
    // 
    type Student={
        name:string;
        age:number;
        email?:string
    }
    
    const student1:Student={
        name:"Abadat",
        age:25,
        email:'a@gmail.com'
    }
    
    // console.log(student1)
    
    function add(num1:number,num2:number):number{
        return num1+num2
    }
    console.log(add(2,4))


    type Add=(num1:number,num2:number)=>number
    
    const add2:Add=(num1,num2)=>{
        return num1 +num2
    }
    const result = add2(4,5)
    console.log(result)

    // 
}