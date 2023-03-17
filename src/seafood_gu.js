
const p1btn=document.querySelector(".priciple-1");
const p2btn=document.querySelector(".priciple-2");
const p3btn=document.querySelector(".priciple-3");
const p4btn=document.querySelector(".priciple-4");
const p5btn=document.querySelector(".priciple-5");
const p6btn=document.querySelector(".priciple-6");
const p7btn=document.querySelector(".priciple-7");
const p8btn=document.querySelector(".priciple-8");
const p1C=document.querySelector(".priciple-1-article");
const p2C=document.querySelector(".priciple-2-article");
const p5C=document.querySelector(".priciple-5-article");
const p6C=document.querySelector(".priciple-6-article");
const p7C=document.querySelector(".priciple-7-article");
const p8C=document.querySelector(".priciple-8-article");

p1btn.addEventListener("click",()=>{ 
    p1C.style.display="block";
});

p2btn.addEventListener("click",()=>{ 
    p2C.style.display="block";
    p1C.style.display="none";
    
});

p3btn.addEventListener("click",()=>{ 
    p2C.style.display="block";
    p1C.style.display="none";
   
    
});
p4btn.addEventListener("click",()=>{ 
    p2C.style.display="block";
    p1C.style.display="none";
    
});
p5btn.addEventListener("click",()=>{ 
    p1C.style.display="none";
    p2C.style.display="none";
    p5C.style.display="block";
   
});

p6btn.addEventListener("click",()=>{ 
    p1C.style.display="none";
    p2C.style.display="none";
    p5C.style.display="none";
    p6C.style.display="block";
    
    
});

p7btn.addEventListener("click",()=>{ 
    p1C.style.display="none";
    p2C.style.display="none";
    p5C.style.display="none";
    p6C.style.display="none";
    p7C.style.display="block";
    
    
});
p8btn.addEventListener("click",()=>{ 
    p1C.style.display="none";
    p2C.style.display="none";
    p5C.style.display="none";
    p6C.style.display="none";
    p7C.style.display="none";
    p8C.style.display="block";
  
    
});