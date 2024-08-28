// 1. let courses = ["nodejs","react", "html", "css"]
// let course1 = courses[0]
// let course2 = courses[1]
// let course3 = courses[2]
// let course4 = courses[3]

// array destructuring

// // let[course1,course2,course3,course4] = courses  

// if we want to skip then we use , in the array

// course1 = "npm"
// console.log(course1)
// console.log(course2)
// console.log(course3)
// console.log(course4)


// 2.
// const arr = [3,5,4,1]
// arr[2] = 90
// console.log(arr) // [3, 5, 90, 1]


// 3.
// object literal {}
// let book = {
//     bookname : "c++",
//     author : "balagurusamy",
//     price : 500
// }
// let {bookname : a1,author : a2,price : a3} = book

// console.log(a1)


// 4.
// function values(){
//     return [44,5,55,6,7]
// }
// let [a,b,c,d,e] = values()

// console.log(a,b,c)


// function calculate(a,b){
//     let sum = a+b
//     let diff = a-b
//     let product = a*b
//     let divide = a/b
//     return [sum,diff,product,divide]

// }
// let [sum,diff,product,divide] = calculate(10,5)
// console.log(sum,diff,product,divide)



// 5
// let cal = (a,b)=>{

// }
//  hello =(msg)=>{
//     console.log(msg)
// }
// hello("some message")


// 6
// Spread operator
// arr = [66,33,55,88]
// console.log(Math.min(...arr))
// console.log(arr)
// console.log(...arr)


// 7
// let  fc=['html','css','react','vanilla.js']
// let  bc=['node js','php','django']
// let combined = [fc,bc]
// console.log(combined)
// let comb = [...fc,...bc]
// console.log(comb)


// let courses = ["nodejs","react", "html", "css"]
// // let newcourses = [...courses, "javascript", "python"]
// // let course1 = courses
// let course1 = [...courses]
// course1.push("angular")
// console.log(course1)
// console.log(courses)


// let courses = ["nodejs","react", "html", "css"]
// let course1 = ["angular",...courses,"java"]
// console.log(course1)

// let book1 = {
//          bookname1 : "c++",
//      author1 : "balagurusamy",
//      price1 : 500
// }
// let book2 = {
//          bookname2 : "physics",
//      author2 : "hc verma",
//      price2 : 100
// }
//  let book = {...book1,book2}
//  let book3 = {book1,...book2}
//  let book4 = {...book1,...book2}
//  console.log(book)
//  console.log(book3)
//  console.log(book4)

// arr = [1,2,3,4]

// function sum(a,b,c,d){
//     return a+b+c+d
// }
// console.log(sum(...arr))
// console.log(sum(...arr +{ ...arr}))


// let courses = ["nodejs","react", "html", "css"]
// let [mycourse,...rest_all] =courses 
// console.log(mycourse)
// console.log(rest_all)


// arrow function 
// variables
// destructuring 
// spread operator

// class Student{
//     constructor(name,age,marks){
//             this.name  = name
//         this.studentname = name
//         this.studentage = age
//         this.studentmarks = marks
//         display (){
//             return `My name is ${this.studentname}`
//             // template literal ${}
//             // backtic ( ` )
//         }
// }}
// let st =  new Student("Sunil")
// console.log(st)
// console.log(st.name)
// console.log(st.studentname)
// console.log(st.display())







