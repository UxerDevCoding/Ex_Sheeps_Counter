let list= [
    true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true
];

let count=0;

function countSheeps(list) {
  for (let i = 0; i <list.length; i++) {
    if (list[i]=== true) {
      count+=1; 
    }   
  }
  return count; 
}
console.log("Number Of sheeps = " + countSheeps(list));