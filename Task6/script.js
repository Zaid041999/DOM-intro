var divs = document.querySelectorAll(".tab");
var texts = document.querySelectorAll("h3");

texts[0].style.display="block";
texts[0].style.width="50%";

divs.forEach(function(div,index){
  div.addEventListener("click",function(){
    hideAllText();
    texts[index].style.display="block";
    texts[index].style.width="50%";
  })
})

function hideAllText(){
    texts.forEach(function(text){
      text.style.display="none";
  
    });
  }





// var home=document.querySelector("#home");
// var about=document.querySelector("#about");
// var contact=document.querySelector("#contact");

// var hometext=document.querySelector("#hometext");
// var abouttext=document.querySelector("#abouttext");
// var contacttext=document.querySelector("#contacttext");

// hometext.style.display="block";
//   hometext.style.width="50%" ;

// home.addEventListener("click",function(){
//   sabtextkohatao()
//   hometext.style.display="block";
//   hometext.style.width="50%" ;
// })

// about.addEventListener("click",function(){
//   sabtextkohatao()
//   abouttext.style.display="block";
//   abouttext.style.width="50%" ;
// })

// contact.addEventListener("click",function(){
//   sabtextkohatao()
//   contacttext.style.display="block";
//   contacttext.style.width="50%"
// })

// function sabtextkohatao(){
//   document.querySelectorAll("h3").forEach(function(texts){
//     texts.style.display="none";

//   })
// }