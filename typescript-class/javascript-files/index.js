"use strict";
// let myName: string | number = "Arham Ali" //Annotations
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// myName = null
// enum userNames{
//     admin= 123,
//     user = "user",
//     coordinator = "coordinator"
// }
// const myObject = {
//     myName: userNames.admin,
//     age: 23
// }
// console.log(myObject)
// interface mubashirObject{
//     age: number | string
//     nationality: string
//     userName : string
//     phoneNumber?: string
// }
// interface arhamObject extends mubashirObject{
//     gender: string,
//     githubId: string
// } 
// interface affanObject extends arhamObject{
//     userName: string
// }
// type affanObject = { userName: string, age: number, nationality: string, phoneNumber: string, gender: string, githubId: string }
// type newOne = {key: number}
// type donoKiType = affanObject & newOne
// const myObj: donoKiType = {
//     userName: "Arham",
//     age: 23,
//     nationality: 'Pakistani',
//     phoneNumber: '09007348534',
//     gender: "male",
//     githubId: "syedarhamali",
//     key: 123
// }
// class userObject{
//  public userName 
//     age
//     nationality
//     userId
//     constructor(userName: string , age: number , nationality: string, userId: number| string){
//         this.userName = userName,
//         this.age = age,
//         this.nationality = nationality,
//         this.userId = userId
//     }
//     showUserName(){
//         console.log(this.userName)
//     }
//     setUserName (userName: string){
//         this.userName = userName
//     }
// }
// const user = new userObject("arham" , 23 , "pakistani" , 0)
// user.showUserName()
// user.setUserName("Ali")
// user.showUserName()
// let cardElement = document.getElementById("cards") as HTMLElement;
// let loader = document.getElementById("main-div") as HTMLElement
// interface productInterface {
//     title: string,
//     description: string,
//     category: string,
//     images: string,
//     price: number | string,
//     availabilityStatus: string,
//     stock: number
//     dimensions: {
//         width: string, height: string, depth: string
//     }
// }
// async function getData() {
//     loader.style.display = "block";
//     cardElement.style.display = "none";
//     let response = await fetch('https://dummyjson.com/products');
//     let data = await response.json();
//     console.log(data)
//     let { products } = data
//     loader.style.display = "none";
//     cardElement.style.display = "flex";
//     products.map((product: productInterface) => {
//         let { title, description, category, images, price, availabilityStatus,stock} = product;
//         let { width, height, depth } = product.dimensions;
//         cardElement.innerHTML += ` <div class="card">
//   <div class="badge">Stock ${stock}</div>
//   <div class="tilt">
//     <div class="img"><img src="${images}" alt="Premium Laptop"></div>
//   </div>
//   <div class="info">
//     <div class="cat">${category}</div>
//     <h2 class="title">${title}</h2>
//     <p class="desc">${description}}</p>
//     <div class="feats">
//       <span class="feat">Width ${width}</span>
//       <span class="feat">Height ${height}</span>
//       <span class="feat">Depth ${depth}</span>
//     </div>
//     <div class="bottom">
//       <div class="price">
//         <span class="new">$${price}</span>
//           <div class="stock">${availabilityStatus}</div>
//       </div>
//       <button class="btn">
//         <span>Add to Cart</span>
//         <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
//           <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4" />
//           <line x1="3" y1="6" x2="21" y2="6" />
//           <path d="M16 10a4 4 0 01-8 0" />
//         </svg>
//       </button>
//     </div>
//     </div>
//   </div>
// </div>
// `
//     })
// }
function outputFunction(koiBhi) {
    console.log("ye value dekha do", koiBhi);
}
function showDetail(obj) {
    console.log("ye object arha he argument se", obj);
}
// showDetail<nameObj>({ myName: 'Arham' })
// showDetail<objInterface>({ myName: 'Moiz', age: 23, gender: "male" })
// showDetail({myName : "Arham" , age: 24 , nationality: "Pakistan"})
const trackUsers = (arg) => {
    console.log("adding chocolate on cake!");
};
let CreateUser = class CreateUser {
    name;
    age;
    nationality;
    constructor(name, age, nationality) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        console.log("cake ban chuka he");
    }
};
CreateUser = __decorate([
    trackUsers
], CreateUser);
const user = new CreateUser("Arham", 24, "pakistani");
console.log(user);
//# sourceMappingURL=index.js.map