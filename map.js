// const num = [4,5,6,7,7,8]
// console.log(num.map(Math.sqrt()))
// const array1= [4,5,6,7,7,8]
// const map1 = array1.map(x=> x*2)
// console.log(map1)

const persons = [
    {name:"Sunil",lastname:"kumar"},
    {name:"Susheel",lastname:"kumar"},
    {name:"Anil",lastname:"kumar"}
]
function getFullName(item){
    // return `${item.name} ${item.lastname}`
    return [item.name,item.lastname].join("")

}
console.log(persons.map(getFullName))