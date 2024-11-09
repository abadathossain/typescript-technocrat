{
    // 
    interface Developer<T,X>{
        name:string;
        computer:{
            brand:string;
            model:string;
            year:number
        }
        smartWatch:T;
        bike?:X
    
    }
    
    const poorDeveloper:Developer<EmilWatch,null>={
        name:"A",
        computer:{
            brand:'abd',
            model:'dd20',
            year:2020
        },
        smartWatch:{
            brand:'Emi',
            model:'K6'
        }
    }

    interface EmilWatch{
        brand:string;
        model:string;
        display?:string
    }

    interface Yahmaha{
        model:string;
        capacity:string
    }
    const richDeveloper:Developer<EmilWatch,>={
        name:"AB",
        computer:{
            brand:'abgjkdjgdj',
            model:'dd20dgf',
            year:2024
        },
        smartWatch:{
            brand:'Emi',
            model:'K6',
            display:'dfnsdfjh'
        },
        model:'fsjfhskjf',
        capacity:'100cc'
    }
    console.log(poorDeveloper)
    console.log(richDeveloper)
    // 
}
