// let myName: string | number = "Arham Ali" //Annotations

// myName = null

interface mubashirObject{
    age: number | string
    nationality: string
    userName : string
    phoneNumber?: string
}

interface arhamObject extends mubashirObject{
    gender: string,
    githubId: string
} 

interface affanObject extends arhamObject{
    userName: string
}

const myObj: affanObject = {
    userName : "Arham",
    age: 23,
    nationality: 'Pakistani',
    phoneNumber: '09007348534',
    gender: "male",
    githubId: "syedarhamali"
}
