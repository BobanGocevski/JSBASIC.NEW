/*
Write a function named findNumber that:
Takes 2 arguments: array, type
The person that calls the function should provide an array of numbers and string odd / even
If the type is even the function should find all the even numbers and return them as result
If the type is odd the function should find all the odd numbers and return them as result
*/




function findNumber(array) {
    let len = array.length,
      isEven = (n) => n % 2 === 0;
  
    for (const [i, value] of array.entries()) {
      let
        prev = array[(i-1+len)%len], // loop around if < 0 (first element)
        next = array[(i+1)%len];     // loop around if >= length (last element)
      if (isEven(value) !== isEven(prev) && isEven(value) !== isEven(next)) {
        return value;
      }
    }
    return undefined;
  }
  
  const arrays = [[16, 4, 11, 20, 2], [7, 4, 11, 3, 41], [2, 4, 0, 100, 4, 7, 2602, 36]]
  console.log(...arrays.map(findNumber)); 


  //JA RESIV SO POMOSH OD INTERNET IAKO NE E KAKO STO SE BARA VO USLOVOT ALI VAKA MI RABOTI OVA NAJTESKA MI BESE DRUGITE DVE MISLAM DEKA SE TOCNI