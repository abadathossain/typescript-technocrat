{
    // 
    class Animal{
        name:string;
        species:string;
        sound:string
    
        constructor(name:string, species:string,sound:string){
            this.name=name;
            this.species=species;
            this.sound=sound
        }
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }
    
    const cat= new Animal('Persian','cat', 'meaw meaw')
    cat.makeSound()
    
    
    
    
    class Man{
        constructor(public name:string, public age:number,public email:string){
    
        }
        makeLine(){
            console.log(`This ${this.name} and email is ${this.email}`)
        }
    }
    
    const student1=new Man('Abadat', 36, 'a@gmail.com')
    student1.makeLine()
    // 
}