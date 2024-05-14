
// function fibb(a){
//     let basevalue = [0,1];
//     for(let i = 2; i <= a; i++ ){
//         basevalue.push( basevalue[i - 1] + basevalue [i - 2]  )
//     }
//     return basevalue;
// }
// console.log ( fibb(5) );


    let array1 = [8, 6, 33, 100,777777,7777777];

    function checking(a){
        let d = [];
        for(let i =0 ; i < a.length; i++){
           d.push(a[i]);
        }
        let MyNewArray = d.join("").split("") 
        for(let i = 0; i<MyNewArray.length; i++){
            if(MyNewArray[i] === "7"){
                return "boom!"
            }
            
        }
        return "7 not present" 
    }
     console.log ( checking(array1) ) 
  
//     let text = "10203040707779";
// const myArray = text.split("");
// console.log(myArray);

let array= [19,20];

// function bag(a){
//     for(let i = 0; i < a.length; i++){
//         let b = a[i];
//         return b;
//     }
//     return "ok i am in main fn"
// }
 
// console.log ( bag(array) );