{
    // 
    const getSpeed = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed}`)
        } else if (typeof value === 'string') {
         const [result, unit] = value.split(' ');
            console.log(parseFloat(result))
            const convertedSpeed = (parseFloat(result) * 1000) / 3600
            console.log(`The speed is ${convertedSpeed}`)
        } else {
            console.log('Wrong Input')
        }
    }
    const result = getSpeed('90 km/h')
    console.log(result)
    // 
}