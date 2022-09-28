DESKTOPWIDTH = 750
user = document.querySelector(".user")
userShare = document.querySelector(".user-share")

if(document.body.clientWidth < DESKTOPWIDTH && !user.classList.contains("hide") && !user.classList.contains("hide")){
    userShare.classList.toggle("hide")
    console.log("aaaaa")
}


function ShowShareContainer(){

    
    
    if(document.body.clientWidth >= DESKTOPWIDTH){
        userShare.classList.toggle("hide")
    }else{
        user.classList.toggle("hide")
        userShare.classList.toggle("hide")
    }
    
}