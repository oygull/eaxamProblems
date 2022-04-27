// Promlem #2

// let arr = [1,-3,12,-1,3,-4,-2,1,-7]
// for(let i=0; i<arr.length; i++){
//   if(arr[0]<0){
//     if(i%2==0){
//       if(arr[i]>0){
//         console.log(i); 
//         break;
//       }
//     }
//     else if(i%2!==0){
//       if(arr[i]<0){
//         console.log(i);
//         break;
//       }
//     }
//   }
//  else if(arr[0]>0){
//     if(i%2==0){
//       if(arr[i]<0){
//         console.log(i); 
//         break;
//       }
//     }
//     else if(i%2!==0){
//       if(arr[i]>0){
//         console.log(i);
//         break;
//       }
//     }
//   }
// }


// Promlem #5

// let obj = {
//   x: 1,
//   y: 2
// }
// let arr = [];

// let a = Object.keys(obj);
// let b = Object.values(obj);

// arr.push(a);
// arr.push(b);

// console.log(arr);


// Promlem #7

// let a = [1,'t',15,'t'];
// let b = [2,4];

// let arr = a.concat(b);

// for(let i=0; i<arr.length; ++i) {
//   for(let j=i+1; j<arr.length; ++j) {
//       if(arr[i] === arr[j])
//       arr.splice(j--, 1);
//   }
// }
// console.log(arr);


// Promlem #6

// let arr = [7,8,7,2,10,6];
// let k =2;
// let l = arr.length;
// let n = l-k;
// let newArr=[];
// let newArr1 = []
// for(let i=0; i<k; i++){
//   arr[i]='-';
//   newArr1.push(arr[i])
//  }
// let newArr2 = []
// for(let i=k; i<arr.length; i++){
//  newArr2.push(arr[i])
// }
// newArr = newArr1.concat(newArr2);

// console.log(newArr);


// Promlem #3

// const obj = {
//   arr: [15,20,12,4,-13,5],
//   at(index) {
//     if(index<0){
//      let newArr = this.arr.reverse();
//     return newArr[Math.abs(index+1)];
//     }
//     return this.arr[index];
//   }
// }

// console.log(obj.at(-2));


// Problem #1

// let n = "10011011";
// let a = 2;

// function parseDecimal(n, a) { 
//   return parseInt(n,a)
// }
// console.log(parseDecimal(n,a));



// Promlem #4

// const string = {
//   reverse: function(str){
//     let arr = Array.from(str);
//     let arr2 = arr.reverse();
//   },
//   ndexOf: function(ch, str){
//     let arr = Array.from(str);

//   }
// }
// string.reverse('Python')