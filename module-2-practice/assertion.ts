{
    // 
    let anything:any;
    anything='Next level';
    
    // console.log((anything as string).length)
    
    
    const kgToGm=(value:string|number):string|number|undefined=>{
        if(typeof value === 'string'){
            const convertedvalue=parseFloat(value)*1000;
            return convertedvalue
        }else if(typeof value === 'number'){
            return value*1000
        }
    }
    const result1=kgToGm(1000)
    console.log(result1)
    const result2=kgToGm('1000')
    console.log(result2)
    // 
}