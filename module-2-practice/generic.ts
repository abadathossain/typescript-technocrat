{
    // 
    type GenArray<T> = Array<T>

    const rollNum: GenArray<number> = [4, 5, 6, 5]
    const name: GenArray<string> = ['a', 'b', 'c']

    // Array of object but not recommended
    const user: GenArray<object> = [
        {
            name: 'A',
            age: 26
        },
        {
            name: "B",
            email: 'a@gmail.com'
        }
    ]




    type User = {
        name: string;
        age: number;
        email: string
    }

    interface User2{
        name: string;
        age: number;
        email: string

    }

    const newUser: GenArray<User2> = [
        {
            name: "a",
            age: 26,
            email: 'a@gmail.com'
        }

    ]
    console.log(newUser)
    // 
}