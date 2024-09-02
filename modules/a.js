// console.log(Array.from("hiiamsunil"))

// let arr = [4,6,7,8]
// let modifiedarr = Array.from(arr,arr=>arr*3)
// console.log(modifiedarr)

// console.log(Array.of(5,64,55,6,6,Array.of(3,Array.from("hiiiiiiiiiii"),4,54,5,5,6,),'hi'))


// let arr = [3,4,5,6,7,8,9,0,1,2]
// console.log(arr.copyWithin(2,1,3))

// where to copy ,what to copy ,last index

// arr = [1,2,3,4,5,5]
// even = arr.find((value)=>{
//     return value % 2 == 0
// })
// console.log(even)
// the first even number 

// arr = [1,3,5,5,4]
// even = arr.findIndex((value)=>{
//     return value % 2 == 0
// })
// console.log(even)

// let arr= [
// {
//    roll:1, name:"sunil",
// },{roll:2 ,name: "kumar"},{roll:3,name:"mehta"}]
// match =arr.find((ar)=>{
//     return ar.roll == 2
// })
// console.log(match)


// let arr= [
// {
//    roll:1, name:"sunil",
// },{roll:2 ,name: "kumar"},{roll:3,name:"mehta"}]
// match =arr.findIndex((ar)=>{
//     return ar.roll == 2
// })
// console.log(match)

// let = arr = ["sunil","susheel","tanush"]
// console.log(...arr.entries())
// console.log(...arr.keys())
// console.log(...arr.values())

// console.log(arr.fill("Kumar",1,2))


// class A{
//     constructor() {
//              this.value = 1;
//     }
//     static method() {
//            return this.value;
//     }
// }

// console.log(A.method());

// function sum(a,b)
// {
//     document.write(a+b);
// }
// let arr=[2,3];
// sum(...arr);

function fun(a,b,...c)
{
    // document.write(`${a} ${b}`);
    document.write('<br>');
    document.write(c);
    document.write('<br>');
    document.write(c[0]);
    document.write('<br>');
    document.write(c.length);
    document.write('<br>');
    document.write(c.indexOf('ashish'));
}
fun('mohit','neha','pooja','LPU','ashish')