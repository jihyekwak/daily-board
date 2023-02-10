const bgImgs = ["antelope canyon.jpg", "bryce canyon.jpg", "grand canyon.jpg", "horseshoe bend.jpg", "zion canyon.jpg"];

const chosenImg = bgImgs[Math.floor(Math.random() * bgImgs.length)];

document.body.style.backgroundImage = `url('images/${chosenImg}')`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";