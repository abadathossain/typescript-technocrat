const searchName=(value:string|null)=>{
    if(value){
        console.log('searching')
    }else{
        console.log("Nothing search")
    }

}
searchName('Abadat')
searchName(null)