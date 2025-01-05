var bulb=document.querySelector("#bulb")
var btn =document.querySelector("button")

var isOn=false
btn.addEventListener("click",function(){
    if(!isOn){
        bulb.style.backgroundColor="yellow"
        console.log("Bulb On")
        isOn=true;
    }else{
         bulb.style.backgroundColor="transparent"
         console.log("Bulb Off")
         isOn=false;
    }

}) 