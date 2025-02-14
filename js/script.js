//Check if there is local storage color option

let mainColors = localStorage.getItem("color_option");
console.log(mainColors)


if(mainColors !== null)
{
    document.documentElement.style.setProperty('--main-color' , localStorage.getItem("color_option"))
        
}
//Toggle Spin Class on Icon
document.querySelector(".toggle-settings .cog").onclick = function(){

// toggles spin on icon
    this.classList.toggle("fa-spin")
// Toggles open on settings box
    document.querySelector(".settings-box").classList.toggle("open");
}

//Switch Colors

//the following is an array of queries
const colorsLi = document.querySelectorAll(".colors-list li")

//Loop on All List Items
colorsLi.forEach(li => {

    //Click on Every List Item
    li.addEventListener("click" , (e) => {
        console.log(e.target.dataset.color);
    //Set color on root
        document.documentElement.style.setProperty('--main-color' , e.target.dataset.color)
        localStorage.setItem("color_option" , e.target.dataset.color);
    
    
    })
})



//Landing Page element
let landingPage = document.querySelector(".landing-page")
let imgsArray  = ["01.jpg" , "02.jpg","03.jpg","04.jpg","05.jpg"]


// Changing randomly between background images
setInterval(() => {
    let randomNumber = Math.floor( Math.random() * imgsArray.length)
landingPage.style.backgroundImage = "url('images/" + imgsArray[randomNumber] + "')"
},10000)