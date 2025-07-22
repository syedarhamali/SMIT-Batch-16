// const mubashir = {
//     personName: "Mubashir",
//     age: 24,
//     walking: function () {
//         const objectNewOne = {
//             eating: function () {
//                 console.log(this.personName)
//             }
//         }
//         objectNewOne.eating()
//     }
// }


// mubashir.walking()


class Person {
    name
    age
    gender
    nationality
    constructor(name, age, gender, nationality) {
        this.name = name,
            this.age = age,
            this.gender = gender,
            this.nationality = nationality
    }
}


let users = new Person("Arham", 24, "male", "pakistani")
let userTwo = new Person("Abubakar", 20, "", "pakistani")
console.log(users)
console.log(userTwo)