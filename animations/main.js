const plants = [
  {
    name: "Rose",
    scientificName: "Rosa"
  },
  {
    name: "Sunflower",
    scientificName: "Helianthus annuus"
  },
  {
    name: "Tulip",
    scientificName: "Tulipa"
  },
  {
    name: "Lavender",
    scientificName: "Lavandula"
  },
  {
    name: "Daisy",
    scientificName: "Bellis perennis"
  },
  {
    name: "Daffodil",
    scientificName: "Narcissus pseudonarcissus"
  },
  {
    name: "Lily",
    scientificName: "Lilium"
  },
  {
    name: "Orchid",
    scientificName: "Orchidaceae"
  },
  {
    name: "Jasmine",
    scientificName: "Jasminum"
  },
  {
    name: "Hibiscus",
    scientificName: "Hibiscus rosa-sinensis"
  }
];


let plantsIntro = plants.map(plant => {
    return plant.name + " + " + plant.scientificName
})

const plantsContainer = document.querySelector("#plants")

plantsContainer.innerHTML += `
    ${plants.map(plant => `
            <h2>${plant.name}</h2>
            <h3>${plant.scientificName}</h3>
        `)}

`

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "History",
  "Literature",
  "Computer Science",
  "Environmental Science",
  "Art",
  "Music", 
  "Drama",
  "Spanish",
  "French",
  "Economics",
  "Business",
  "Accounting",
  "Physical Education",
  "Health Science",
  "Psychology"
];

console.log(plantsIntro);
console.log(plants);

const students = [
  {
    name: "Alice Johnson",
    age: 18,
    subjects: ["Mathematics", "Physics", "Chemistry"]
  },
  {
    name: "Bob Smith",
    age: 19,
    subjects: ["English", "History", "Literature"]
  },
  {
    name: "Charlie Davis",
    age: 18,
    subjects: ["Biology", "Chemistry", "Environmental Science"]
  },
  {
    name: "Diana Wilson",
    age: 20,
    subjects: ["Mathematics", "Computer Science", "Physics"]
  },
  {
    name: "Evan Martinez",
    age: 19,
    subjects: ["Art", "Music", "Drama"]
  },
  {
    name: "Fiona Garcia",
    age: 18,
    subjects: ["Spanish", "French", "English"]
  },
  {
    name: "George Taylor",
    age: 21,
    subjects: ["Economics", "Business", "Accounting"]
  },
  {
    name: "Hannah Anderson",
    age: 19,
    subjects: ["Physical Education", "Health Science", "Psychology"]
  },
  subjects
];



const planstAndStudents = [plants, students]

console.log(planstAndStudents);
console.log(planstAndStudents.flat(2));


const poppedStudent = students.pop()
console.log(poppedStudent);

const totalAge = students.reduce((accumulator,student) => accumulator+student.age , 0)
const students20 = students.every(student => student.age >= 10)
console.log(students20);
