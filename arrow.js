1
// hello()  Hoisting
// function hello(){
//     // console.log("hello world")
//     return "hello world"
// }
// console.log(hello())  
// traditional 


2
// let hello =()=>{
//     console.log()
//  }
//  hello()
// let hello =()=>console.log("hello")
// hello()

3
//  hello =(msg)=>{
//     console.log(msg)
// }
// hello("some message")


4
//  Es6 = Ecmascript
// if(true){
//     var s = 3
// }
// console.log(s)

// var = global scope
// const , let = block scope

5
// redacliration   var var = yes  , var let = no ,let let = no 
// var s = 89
// var s=90
// console.log(s)


// let s = 89  
// // const = no , var = yes,let = yes
//   s=90
// console.log(s)


// let , var = undefined  ,   const = error
let s  
console.log(s)