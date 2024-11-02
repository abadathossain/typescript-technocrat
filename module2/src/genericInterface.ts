{
    type GenericArray<T>=Array<T>;
    type User={
        name:string;
        age:number
    }

    interface User1{
        name:string;
        age:number
    }
    
const user:GenericArray<User>=[
    {
        name:'a',
        age:25
    },
    {
        name:'b',
        age:35
    },
    {
        name:'c',
        age:20
    }
]
}