let audio =document.querySelector('audio')
let img =document.querySelector('img')
let button2 =document.querySelector('#play')
let button3 =document.querySelector('#forward')


let input=document.querySelector('input')
let button1=document.querySelector('#backward')

let i =document.querySelectorAll('i') 
audio.volume=input.value

input.addEventListener('input',(e)=>{
    audio.volume=e.target.value
})
// let malumod=[music,music1]
let kl=true
button2.addEventListener('click',()=>{
    console.log('salom')
    if(kl){
        audio.play()
    i[1].classList='fa-solid fa-pause'
}else{
    audio.pause()
    i[1].classList='fa-solid fa-play'

}
kl=!kl
})
let lk=true
button3.addEventListener('click',()=>{
    console.log('salom')
    if(kl){
    img.src=`./images/music.jpg`
    audio.src=`./music/music.mp3`
    i[1].classList='fa-solid fa-pause'
        audio.play()
}else{
    img.src=`./images/music1.jpg`
    audio.src=`./music/music1.mp3`
    i[1].classList='fa-solid fa-pause'
    audio.play()

}
kl=!kl
})
let ld=true
button1.addEventListener('click',()=>{
    console.log('salom')
    if(ld){
    img.src=`./images/music.jpg`
    audio.src=`./music/music.mp3`
    i[1].classList='fa-solid fa-pause'
        audio.play()
}else{
    img.src=`./images/music1.jpg`
    audio.src=`./music/music1.mp3`
    i[1].classList='fa-solid fa-pause'
    audio.play()

}
ld=!ld
})