{
    const arr: number[] = [1, 2, 3, 4]
    const newArr: number[] = arr.map((elem: number): number => elem * elem)
    // console.log(newArr)

    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => {
            console.log(`Hi ${friend}`)

        });

    }
    greetFriends('a', 'b', 'c')


}