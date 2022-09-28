function ShowShareContainer(){
    user = document.querySelector(".user")
    userShare = document.querySelector(".user-share")
    console.log(user, userShare)
    user.classList.toggle("hide")
    userShare.classList.toggle("hide")
}