{
    const age:number=25

    if(age>=25){
        console.log('Adult')
    }else{
        console.log("not adult")
    }

    // ternary operator

    const isAdult=age>25?'Is Adult':'Not Adult'
    console.log(isAdult)

    // nullish operator
    const isAuthenticated=null;
    const result=isAuthenticated??'Guest';
    console.log(result)
}