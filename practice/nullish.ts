{
    // 
    const isAuthenticated = null;
    const result = isAuthenticated ?? 'Guest'
    // console.log(result)


    type User={
        name:string;
        address:{
            city:string;
            pAddress:string;
            perAddress?:string
        }
    }

    const user:User={
        name:'Abadat',
        address:{
            city:'ctg',
            pAddress:'ctg town',
            perAddress:'Tangail'
        
        }
    }

    const perAddress=user?.address?.perAddress??'No Address'
    console.log(perAddress)
    // 
}