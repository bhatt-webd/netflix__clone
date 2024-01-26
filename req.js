var btn = document.querySelector(".btn1")
var img = document.querySelector(".img")
var flag=0
var tmp=0
var img2 = document.querySelector(".img2")
var h1 = document.querySelector("#heart1")
var h2 = document.querySelector("#heart2")


btn.addEventListener("click",function(){
    if(flag==0)
    {
        btn.innerHTML = "Followed"
        btn.style.backgroundColor = "green"
        img.style.filter = " brightness(100%)"
        flag=1
    }
    else
    {
        btn.innerHTML = "Add Friend"
        btn.style.backgroundColor = "blue"
        img.style.filter = " brightness(90%)"
        flag=0;    
    }
})
img2.addEventListener("dblclick",function(){
    
            h1.style.scale = "1.8"
            h1.style.opacity = "1"
            h2.style.color = "red"
            tmp=1
        setTimeout(function(){
            h1.style.scale = "0"
            h1.style.opacity = "0"  
        },2000)
            

})
setTimeout(function(){
    img2.addEventListener("dblclick",function(){
         h1.style.scale = "0"
         h1.style.opacity = "0"
        
},2000)
})

h2.addEventListener("click",function(){
    if(tmp==0)
    {
        h1.style.scale = "1.8"
        h1.style.opacity = "1"
        h2.style.color = "red"
        tmp=1
        setTimeout(function(){
            h1.style.scale = "0"
            h1.style.opacity = "0"  
        },2000)
    }
    else{
    
        h2.style.color = "white"
        tmp=0;
    }

})