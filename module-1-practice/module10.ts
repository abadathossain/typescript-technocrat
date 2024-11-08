type FrontDev={
    skills:string[];
    designation1:'FDev'
}

type BackDev={
    skills:string[];
    designation2:'BDev'
}

type FullStackDev= FrontDev | BackDev;

const fullStackDev:FullStackDev={
    skills:['a','b'],
    designation1:'FDev',
    // designation2:'BDev'
}
console.log(fullStackDev)