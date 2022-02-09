









let input1= document.getElementById("input1");
let input2 = document.getElementById("input2");
let button = document.getElementById ("buton");
let vector =document.getElementById("vector");
let small =document.getElementById("small");

x = "julia";
y = "juliapass";


input1.addEventListener("click",()=>{
    
    input1.style.border="none"
    input2.style.border="none"
})
button.addEventListener("click",()=>{


 
    if (input1.value ===x && input2.value ===y) {
        
        input1.style.border="1px solid #51ff00"
        input2.style.border="1px solid #51ff00"
        window.location.href="admin.html"


    }else{
        input1.style.border="1px solid red"
        input2.style.border="1px solid red"
    }  
    
})

vector.addEventListener("click",()=>{
    small.style.display="none";
})

