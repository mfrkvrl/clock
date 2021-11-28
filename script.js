let saniye=document.querySelector(".saniye")
let akrep=document.querySelector(".akrep")
let yelkovan=document.querySelector(".yelkovan")
setInterval(cevir,1000)



function cevir(){
    let time=new Date()
    
    let hours=time.getHours()
    let minutes=time.getMinutes()
    let seconds=time.getSeconds()

    let second=seconds*6-90
    saniye.style.transform=`rotate(${second}deg)`

    let minute=(minutes+(seconds/60))*6-90
    yelkovan.style.transform=`rotate(${minute}deg)`

    let hour=(hours+(minutes/60)+seconds/3600)*30-90
    akrep.style.transform=`rotate(${hour}deg)`




    if(seconds>59){ 
        console.clear()
    }
     console.log(`Saniye:${seconds} Dakika:${minutes} Saat:${hours}`)
}