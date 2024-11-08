{
    // 
    const createArrGen=<T>(param:T):T[]=>{
        return [param]
    }
    const result=createArrGen<string>('Bangladesh')
    // console.log(result)


    // function sumArray(numbers: number[]): number {
    //     let sum = 0;
    //     for (let i = 0; i < numbers.length; i++) {
    //         sum += numbers[i];
    //     }
    //     return sum;
    // }
    
    // // Sample Input:
    // console.log(sumArray([1, 2, 3, 4, 5]));
    
    // // Sample Output: 15

    function sumArray(numbers: number[]): number {
        let sum = 0;
        for (const num of numbers) {
            sum += num;
        }
        return sum;
    }
    
    // Sample Input:
    const result2=sumArray([1, 2, 3, 4, 5])
    console.log(result2);
    
    // Sample Output: 15
     
    
    // 
}