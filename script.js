const fs= require('fs');

//1- what floor does santa end up on
//Rules- (--> +1 floor 
// )--> -1 Floor


function question1(){
   fs.readFile('./input.txt', (err,data)=>{
    console.time('start');
      
       const direction = data.toString();
        //console.log(direction);
         const directionArray= direction.split('');
         //console.log(directionArray);
         const ans= directionArray.reduce((acc,val)=>{
            
            if (val==='('){
                return acc+=1;
            }
             else if(val==')'){
                 return acc-=1;
             }
         },0)
         console.timeEnd('start');
         console.log(ans);
   }) 
   
}

question1();

// santa entering basement

function question2(){
    fs.readFile('./input.txt', (err,data)=>{
     console.time('start');
       
        const direction = data.toString();
         //console.log(direction);
          const directionArray= direction.split('');
          let acc=0;
          let counter=0;
          //console.log(directionArray);
          const ans= directionArray.some((val)=>{
             
             if (val==='('){
                 acc+=1;
             }
              else if(val==')'){  
                   acc-=1;
              }
              counter++
              return acc <0 ;
          })
          console.timeEnd('start');
          console.log('q2',counter);
    }) 
    
 }
 
 question2();