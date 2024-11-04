{
    // 
    type AlphaNumeric=string|number;
const add=(param1:AlphaNumeric,param2:AlphaNumeric)=>{
    if(typeof param1 === 'number'&& typeof param2 ==='number' ){
       return(param1+param2)
    }else{
        return param1.toString()+param2.toString()
    }
}
const result1=add(2,3);
const result2=add('2','3')
// console.log(result1);
// console.log(result2)


type NormalUser={
    name:string;
}
type AdminUser={
    name:string;
    role:"admin"
}

const getUser=(user:NormalUser|AdminUser)=>{
    if('role' in user){
        console.log(`My name is ${user.name} and role is ${user.role}`)
    }else{
        console.log(`My name is ${user.name}`)
    }
}
const normalVai:NormalUser={
    name:'Normal vai'
}

const adminVai:AdminUser={
    name:'Admin vai',
    role:'admin'
}

getUser(normalVai)
getUser(adminVai)



    // 
}