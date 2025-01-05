var form =document.querySelector("form");
var inp = document.querySelector('input[type="text"]')
// var inp1 = document.querySelector("#inp1");
// var inp2 = document.querySelector("#inp2");
var h4 = document.querySelector("h4");

form.addEventListener("submit",function(ev){
    ev.preventDefault();
    for(var i = 0 ;i<inp.clientHeight;i++){
        if(inp[i].value.trim()==='')
                {
                    h4.textContent="error,some field are blank!"
                    h4.style.color="red"
                    break;
                }
    }
})
// form.addEventListener("submit",function(ev){
//     ev.preventDefault();
//     if(inp1.value.trim()===''||inp2.value.trim()==='')
//     {
//         h4.textContent="error,some field are blank!"
//         h4.style.color="red"
//     }else{
//          h4.textContent=""
//          h4.style.color="black"
//     }
   
// });