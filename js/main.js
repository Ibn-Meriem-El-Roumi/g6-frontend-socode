// This is my first js code


var numberOfStudets = 4.6
let numberOfAbsents = 2
const schoolName = "SoCode"
let courseFinished = false


console.log(typeof numberOfAbsents)
// console.log(typeof schoolName)
// console.log(typeof courseFinished)

// let studentList = ["Wahiba", "Louay", "Adem", "Saoussen"]
// let arrayName = [21, 56, 45, 89, 654, 45.89, false, "Hello"]

// let studentName = studentList[1]

// console.log(`Hello ${studentName}`)

const englishCont = {
    title: "Welcome to School",
    posts: [
        "New Academic year",
        "Exams Ann"
    ],
    author: ""
}

// const frenchCont = {
//     title: "Bienvenue chez nous",
//     posts: [
//         "Nouvelle annee academique",
//         "Les Controles sont la"
//     ]
// }

// const mathCont = {
//     title: "",
//     equations
// }

// let selectedlanguage = "fr"

// if(selectedlanguage === "en") {
//     console.log(englishCont);
// }else{
//     console.log(frenchCont);
// }

// class Labo {
//     constructor(name, abr, nm, nr, drp){}
// }

// const labo1 = new Labo()

let lab1 = {
    labName: "Molecular Biology Lab",
    labAbr: "MBL",
    numberOfMembers: 20,
    nameOfResp: "Dr Chouchane",
    department: "Pharmacy"
}

let lab2 = {
    labName: "Human Anatomy",
    labAbr: "HA",
    numberOfMembers: 25,
    nameOfResp: "Dr Chouchane",
    department: "Medicine"
}

let lab3 = {
    labName: "hematobiology",
    labAbr: "HB",
    numberOfMembers: 25,
    nameOfResp: "Dr Chouchane",
    department: "Medicine"
}

// console.log(lab2.labName);


let medLabs = [
    lab1,
    lab2,
    lab3
]

console.log(medLabs);

// const labContainer = document.querySelector(".lab-container")

// for(let i = 0; i < medLabs.length; i++){
//     labContainer.innerHTML += `
//         <div class="lab">
//             <h3 class="labname">Lab Name: ${medLabs[i].labName}</h3>
//             <p>LabCount: ${medLabs[i].numberOfMembers}</p>
//             <p>Resp: ${medLabs[i].nameOfResp}</p>
//             <p>Department: ${medLabs[i].depatment}</p>
//         </div>
//     `
// }


// const welcomeMsg = document.querySelector("#welcome-msg")
// console.log(welcomeMsg.textContent);
// console.log(document.querySelector(".lab-container"));

// welcomeMsg = document.querySelector(".lab-container")

// console.log(lab1, lab2, medLabs);

// const h1 = document.querySelector("h1")
// console.log(h1.innerText);
// h1.innerText = `${lab2.labName}`
// console.log(h1.innerText);

// const labName = document.querySelector("#labname")
// const labAbr = document.querySelector("#lababr")
// const labResp = document.querySelector("#labresp")
// const labCount = document.querySelector("#labcount")

// labName.innerHTML = `${lab2.labName}`
// labAbr.innerHTML = `${lab2.labAbr}`
// labResp.innerHTML = `${lab2.nameOfResp}`
// labCount.innerHTML = `${lab2.numberOfMembers}`

// labName.style.color = "red"
// labName.style.fontSize = "2rem"
// labName.style.backgroundColor = "green"

// const age = 17
// if(age >= 18){
//     console.log("You are an adult");
// }else{
//     console.log("You are a mino");
// }

// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// let i = 0
// while(true){
//     console.log(i);
//     i++
// }




// Functions
function saySomething(msg) {
    console.log(`Hi, i want to say ${msg}`);
}

function calculateMonthSalary(workingHours){
    const hourRate = 1000
    let monthSalary = hourRate * 30 * workingHours
    return monthSalary
}




function displaySalary(salary){
    const salaryEl = document.querySelector("#salary")
    salaryEl.textContent = `${salary} DA`
}

displaySalary(calculateMonthSalary(30))



















