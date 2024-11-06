{
    // 
    const createArrGen=<T>(param:T):T[]=>{
        return [param]
    }
    const result=createArrGen<string>('Bangladesh')
    console.log(result)
    // 
}