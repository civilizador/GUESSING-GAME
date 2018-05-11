var wordContainerDiv = document.getElementById("word");
var box;
var score=0;
var ran;
var i=0;
var currentWord = '';
var tempArr;
var allboxes= [];
var correctAnswers=[];
var openedLettersQuantity=0;
var allWords = ['alabama','bing','bored','dr-pepper','school','democracy','branch','momager','one-mooch','alexaed']
var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","-"];
var allHints = [
"A truly lovely state, where the unofficial motto is...At Least We are Not Mississippi!'",
'Lets search XXXX for Google.',
'What you probably are if you playing this game.',
'Soda that do not have a period in its name where it suppose to be',
'The place where you have to learn a lot of things that most likely will never need',
'Something United States of America politicians claims the country is built on, while every single day they make every effort to undermine it.',
'Banks has them, almost in every neighborhood',
'a parent who pushes their child or children into show business at the risk of their mental and physical health and without any regard to their social development or privacy',
'One mooch refers to a period of ten days. Refers to the length in which Anthony Scaramucci was employed at the White House.',
"Kid1:Mom,STOP! And mom did stop talking. Kid2:'Wow mom, he just XXXXX'ed you!"
 
]
// START BUTTON CLICK  event  

 $("#start").click( 
     function() {
          let  ran = Math.floor(Math.random()*allWords.length);
               doEverything(ran)
     function  doEverything() {
          var  tempWord = allWords[ran]
               tempArr = tempWord.split('')
               score = tempArr.length+3;
               $("#score").html(score)
               { $(".hint").html(allHints[ran])}
               // console.log(tempArr.length)
          for (i=0; i < tempArr.length; i++)
               {
                    // console.log(i)
                    box = document.createElement("div"); 
                    blahBlahBlah()
                    wordContainerDiv.append(box)
                    allboxes.push(box)
                    $("#boxId"+i).html( tempArr[i] )
               }
                
     }
     var restartButton=document.createElement("button");
     
     restartButton.setAttribute("id","restartButton");
     restartButton.addEventListener("click",restartGame)    
          $('#scoreBoard').append(restartButton) ;
          restartButton.innerHTML="Restart";
});
          function blahBlahBlah() {   box.setAttribute("id", "boxId"+i);
                              box.setAttribute("class", "boxClass");}

// END OF START BUTTON CLICK  event  

//
//

// KEY BOARD KEY PRESS

$(document).keydown(function(e){
    
     score--; 
      $("#score").html(score)
          if (score===0 ) {alert('You LOST!. The word was:'+ tempArr  )
                              restartGame();}
          else {
     if (openedLettersQuantity > tempArr.length-1 ) {
          console.log(openedLettersQuantity)
                         alert('You won. The word was:'+ tempArr  )
                              restartGame();
     }
     else {
      for(let j = 0; j<tempArr.length; j++){
          if(e.key == tempArr[j]){
               console.log("it works!")
               
                allboxes[j].style.color="black"
                    openedLettersQuantity++;
               
               if (correctAnswers.indexOf(event.key)  == -1) {
                    correctAnswers.push(event.key) }
               else  {console.log("already have it!")} 
               
                   
          }
          else if(e.key !== tempArr[i]) {
           console.log("wrong letter!")
            }
     }
       }}
        $("#letterWide").val(e.key)
});

//        END OF KEY PRESS LISTENER



// KEY BOARD


// for (let i=0;i<27;i++){
//      var alphaBox = document.createElement("div"); 
//      createManyBoxes(alphaBox)
          
//      function createManyBoxes (element){
//           this.alphaBox=element;
//           this.alphaBox.setAttribute("class", "letter")
//           $(".alphabet").append(alphaBox)
//                     putLettersInDaBoxes(alphaBox);
//           function putLettersInDaBoxes (letter) {
//                     this.letter=letter;
//                     this.letter.innerHTML = alphabet[i];
//                     letter.addEventListener("click",function(){console.log(letter.innerHTML)})
//           }
//      }
// }


//End of KeyBoard

 function restartGame () { window.location.reload()}