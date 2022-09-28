DESKTOPWIDTH = 750

function ShowShareContainer(){

    user = document.querySelector(".user")
    userShare = document.querySelector(".user-share")
    
    if(document.body.clientWidth >= DESKTOPWIDTH){
        userShare.classList.toggle("hide")
    }else{
        user.classList.toggle("hide")
        userShare.classList.toggle("hide")
    }
    
}