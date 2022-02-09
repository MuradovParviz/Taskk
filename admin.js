let product=
[
    {
        id:"1",
        image:"Rectangle 12.png",
        title:"Banana",
        price:"$2.6",
        weight:"300g",
        about:"A banana is an elongated, edible fruit – botanically a berry..."
        
    },
    {
        id:"2",
        image:"Rectangle 12.png",
        title:"Banana",
        price:"$2.6",
        weight:"300g",
        about:"A banana is an elongated, edible fruit – botanically a berry..."
        
    },
    {
        id:"3",
        image:"Rectangle 12.png",
        title:"Banana",
        price:"$2.6",
        weight:"300g",
        about:"A banana is an elongated, edible fruit – botanically a berry..."
        
    },
    {
        id:"4",
        image:"Rectangle 12.png",
        title:"Banana",
        price:"$2.6",
        weight:"300g",
        about:"A banana is an elongated, edible fruit – botanically a berry..."
        
    },
    {
        id:"5",
        image:"Rectangle 12.png",
        title:"Banana",
        price:"$2.6",
        weight:"300g",
        about:"A banana is an elongated, edible fruit – botanically a berry..."
        
    },
    {
        id:"6",
        image:"Rectangle 12.png",
        title:"Banana",
        price:"$2.6",
        weight:"300g",
        about:"A banana is an elongated, edible fruit – botanically a berry..."
        
    },
    {
        id:"7",
        image:"Rectangle 12.png",
        title:"Banana",
        price:"$2.6",
        weight:"300g",
        about:"A banana is an elongated, edible fruit – botanically a berry..."
        
    },
    {
        id:"8",
        image:"Rectangle 12.png",
        title:"Banana",
        price:"$2.6",
        weight:"300g",
        about:"A banana is an elongated, edible fruit – botanically a berry..."
        
    },
    {
        id:"9",
        image:"Rectangle 12.png",
        title:"Banana",
        price:"$2.6",
        weight:"300g",
        about:"A banana is an elongated, edible fruit – botanically a berry..."
        
    },
    {
        id:"10",
        image:"Rectangle 12.png",
        title:"Banana",
        price:"$2.6",
        weight:"300g",
        about:"A banana is an elongated, edible fruit – botanically a berry..."
        
    },
    {
        id:"11",
        image:"Rectangle 12.png",
        title:"Banana",
        price:"$2.6",
        weight:"300g",
        about:"A banana is an elongated, edible fruit – botanically a berry..."
        
    },
    {
        id:"12",
        image:"Rectangle 12.png",
        title:"Banana",
        price:"$2.6",
        weight:"300g",
        about:"A banana is an elongated, edible fruit – botanically a berry..."
        
    },
]


let shop=
[
    {
        id:"1",
        image:"Rectangle 13.png",
        title:"DreamTown",
        about:"Monday-Sunday: 10 AM - 10PM One of the biggest shopping and entertainment centers in Kiev."
        
    },
    {
        id:"2",
        image:"Rectangle 13.png",
        title:"DreamTown",
        about:"Monday-Sunday: 10 AM - 10PM One of the biggest shopping and entertainment centers in Kiev."
        
    },
    {
        id:"3",
        image:"Rectangle 13.png",
        title:"DreamTown",
        about:"Monday-Sunday: 10 AM - 10PM One of the biggest shopping and entertainment centers in Kiev."
        
    },
    {
        id:"4",
        image:"Rectangle 13.png",
        title:"DreamTown",
        about:"Monday-Sunday: 10 AM - 10PM One of the biggest shopping and entertainment centers in Kiev."
    },
    {
        id:"5",
        image:"Rectangle 13.png",
        title:"DreamTown",
        about:"Monday-Sunday: 10 AM - 10PM One of the biggest shopping and entertainment centers in Kiev."
        
    },
    {
        id:"6",
        image:"Rectangle 13.png",
        title:"DreamTown",
        about:"Monday-Sunday: 10 AM - 10PM One of the biggest shopping and entertainment centers in Kiev."
        
    },
    {
        id:"7",
        image:"Rectangle 13.png",
        title:"DreamTown",   
        about:"Monday-Sunday: 10 AM - 10PM One of the biggest shopping and entertainment centers in Kiev."
        
    },
    {
        id:"8",
        image:"Rectangle 13.png",
        title:"DreamTown",
        about:"Monday-Sunday: 10 AM - 10PM  One of the biggest shopping and entertainment centers in Kiev."
        
    }
]
let productBut = document.getElementById("product");
let shoopBut = document.getElementById("shops");
let images = document.getElementById("images");



let admin = document.getElementById("admin")
let admin1 = document.getElementById("admin1")
product.map(e =>{

   admin.innerHTML += `
   <div  class="admin-small">
   <div class="small-top">
       <div class="small-img">
        <img src="${e.image}">
       </div>
       <div class="small-left">
       <h2 class="small-h2">${e.price}</h2>
       <h6 class="small-h6">${e.weight}</h6>
       </div>

   </div>


   <div class="small-bottom">
     <h4> ${e.title} </h4>
     <h6> ${e.about}</h6>
   </div>
   </div>


   
   ` 
})
shop.map(e =>{

    admin1.innerHTML += `
    <div  class="admin-small">
    <div class="small-top">
        <div class="small-img">
         <img src="${e.image}">
        </div>
        <div class="small-left">
        </div>
 
    </div>
 
 
    <div class="small-bottom">
      <h4> ${e.title} </h4>
      <label>
      
      <h6> ${e.about}</h6>
      </label>
      
    </div>
    </div>
 
 
    
    ` 
 })
productBut.addEventListener("click" ,()=>{
    admin.style.display="flex"
    admin1.style.display="none"
})
shoopBut.addEventListener("click" ,()=>{
    admin.style.display="none"
    admin1.style.display="flex"
})
images.addEventListener("click",()=>{
    window.location.href="index.html"
})
