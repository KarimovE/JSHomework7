let images = document.querySelectorAll(".container .gallery a");
let imagesss = document.querySelectorAll(".container .gallery a img");
let popup = document.querySelector(".popup");
let biggestImg = document.querySelector(".popup .inner img");
let closeIcon = document.querySelector(".forPop");
let prevBtn = document.querySelector(".arrows .prev");
let nextBtn = document.querySelector(".arrows .next");
let entanceBtn= document.querySelector(".btn");
let inputName= document.querySelector("input");
let welcome= document.querySelector("h2");
let smallImages=document.querySelector(".ofGallery")
let entrance=document.querySelector(".entance")
let input=document.querySelector(".input")
let fileUpload=document.querySelector(".fas")
let closeIconForImg=document.querySelector(".forImg")
let alertMessage=document.querySelector("h4")
let count=-1

fileUpload.addEventListener("click", function (){
  input.click()
})

input.addEventListener("change", function (e){
  const {files}=e.target  
  for (let file of files) {
    const fileReader=new FileReader()
    fileReader.onloadend=function (e) {
    const {result}=e.target
    imagesss[count].setAttribute('src', result)
    images[count].setAttribute('href', result)
  }
  fileReader.readAsDataURL(file)  
}
count++
});
    
entanceBtn.addEventListener("click", function () {
    if(inputName.value===null || inputName.value===undefined || inputName.value==="")
   {
    alertMessage.innerText="Please enter a valid Name"
}
   else
   {
   smallImages.style.visibility="visible"
   welcome.innerText=" "
   welcome.innerText="Welcome, "+ inputName.value + "!"
   entrance.style.visibility="hidden"
  } 
});


setTimeout(() => {
  if (popup.style.display === "flex") {
    let showSlide = document.querySelector(".showSlide");
    nextElemSib(showSlide);
  }
 }, 3000);

 let interval = setInterval(() => {
  if (popup.style.display === "flex") {
    let showSlide = document.querySelector(".showSlide");
    nextElemSib(showSlide);
  }
 }, 4000);

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    if(inputName.value===null || inputName.value===undefined || inputName.value==="")
    {
     alertMessage.innerText="Please enter a valid Name"
 }
    else
    {
      smallImages.style.visibility="visible"
    welcome.innerText=" "
    welcome.innerText="Welcome, "+ inputName.value + "!"
    entrance.style.visibility="hidden"
   }
  }

  if (e.code === "Escape" && popup.style.display === "flex") {
    doClose();
  }

  if (e.code === "ArrowLeft" && popup.style.display === "flex") {
    let showSlide = document.querySelector(".showSlide");
    prevElemSib(showSlide);
    }

  if (e.code === "ArrowRight" && popup.style.display === "flex") {
    let showSlide = document.querySelector(".showSlide");
    nextElemSib(showSlide);
  }
});

images.forEach((image) => {
  image.addEventListener("click", function (e) {
    e.preventDefault();
    doOpen();
    changableImage(image);
    image.classList.add("showSlide");
  });
});

nextBtn.addEventListener("click", function () {
  let showSlide = document.querySelector(".showSlide");
  nextElemSib(showSlide);
});

prevBtn.addEventListener("click", function () {
  let showSlide = document.querySelector(".showSlide");
  prevElemSib(showSlide);
});

function doOpen() {
  popup.style.display = "flex";
}

function doClose() {
  popup.style.display = "none";
}

closeIcon.addEventListener("click", function () {
  doClose();
});

closeIconForImg.addEventListener("click", function (e) {
  e.target.previousElementSibling.setAttribute('src', "#");
});


document.addEventListener("click", (e) => {
  if (e.target.classList.contains("forImg")) {
    e.target.previousElementSibling.setAttribute('src', "#");
  }
});

function changableImage(item) {
  let imgSrc = item.getAttribute("href");
  biggestImg.setAttribute("src", imgSrc);
}

function nextElemSib(item) {
  if (item.nextElementSibling !== null) {
    item.nextElementSibling.classList.add("showSlide");
    changableImage(item.nextElementSibling);
  } else {
    item.parentElement.children[0].classList.add("showSlide");
    changableImage(item.parentElement.children[0]);
  }

  item.classList.remove("showSlide");
}

function prevElemSib(item) {
  let length = item.parentElement.children.length;

  console.log(length);
  if (item.previousElementSibling !== null) {
    item.previousElementSibling.classList.add("showSlide");
    changableImage(item.previousElementSibling);
  } else {
    item.parentElement.children[length - 1].classList.add("showSlide");
    changableImage(item.parentElement.children[length - 1]);
  }
  item.classList.remove("showSlide");
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    doClose();
  }
});


