let heroTexts = document.querySelectorAll(".hero_text");
let heroImgs = document.querySelectorAll(".hero_img");
let heroMarkers = document.querySelectorAll(".hero_marker");

let heroSect = document.querySelector(".hero_sect");

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function changeSlide(currPos, nextPos) {
    heroTexts[currPos].classList.add("fade-out")
    heroImgs[currPos].classList.add("fade-out")
    heroMarkers[currPos].classList.remove("current_mark");
    heroMarkers[nextPos].classList.add("current_mark");
    await sleep(400)
        heroTexts[currPos].classList.add("hidden")
        heroImgs[currPos].classList.add("hidden")
        
        heroTexts[nextPos].classList.remove("hidden")
        heroImgs[nextPos].classList.remove("hidden")
    
    await sleep(100)
    console.log("ran")
    heroSect.style.background = heroTexts[nextPos].dataset.color
    heroTexts[nextPos].classList.remove("fade-out")
    heroImgs[nextPos].classList.remove("fade-out")


}

// changeSlide(0,1)

let currPos = 0;
setInterval(() => {
    let nextPos = currPos < heroTexts.length - 1 ? currPos + 1 : 0;
    console.log(nextPos, currPos)
    changeSlide(currPos, nextPos)
    currPos = nextPos
}, 2000)
