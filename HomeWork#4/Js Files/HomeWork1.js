/*
Create a function called tellStory()

The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

The function should return one big string with a story made from the arguments

Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

The value that is returned from the function should be printed in the console or in alert
*/

let array = ["Boban,", "happy" , "trading"]

function tellStory(){
    console.log(`My name is  ${array[0]}.${array[0]} have gradued on Faculty of Civil Engineering. Today he is in a ${array[1]} mood, bcs he love to prove himself in market while he ${array[2]}`)
}
tellStory(array)
