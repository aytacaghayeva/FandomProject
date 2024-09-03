let button = document.querySelector(".sign");
let btn = document.querySelector(".reg");

button.addEventListener("click",(event)=>{
     window.location.href = "https://auth.fandom.com/signin?flow=fcdaf847-3705-4f4e-ae9e-f38761fea6ef"
});
btn.addEventListener("click",(event)=>{
    window.location.href = "https://auth.fandom.com/register?flow=707eceb2-a420-4240-9e00-da5f92a49000"
});

let explore = document.querySelector(".fa-arrow-right");

explore.addEventListener("click",(event)=>{
    window.location.href = "https://www.fandom.com/explore"
});


