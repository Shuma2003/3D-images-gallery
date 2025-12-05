let imgContainer = document.querySelector('.image-container')
setInterval(()=>{
let firstImg = imgContainer.firstElementChild;
firstImg.remove();
imgContainer.appendChild(firstImg);
}, 2500)