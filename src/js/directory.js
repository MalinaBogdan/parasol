let companyNavItems = document.getElementsByClassName("company-nav-item")
let infoBlocks = document.getElementsByClassName("company-info-block")


document.querySelector(".leaders-block").style.display = "flex";
setTimeout(() => document.querySelector(".leaders-block").classList.add("qwe"), 100);

for (let i = 0; i < companyNavItems.length; i++) {
    companyNavItems[i].onclick = function () {
        for (let j = 0; j < companyNavItems.length; j++) {
            companyNavItems[j].classList.remove("active-item")
            infoBlocks[j].classList.remove("qwe")
            infoBlocks[j].style.display = "none";

        }

        switch (companyNavItems[i].id) {
            case "leaders-block":
                document.querySelector(".leaders-block").style.display = "flex";
                setTimeout(() => document.querySelector(".leaders-block").classList.add("qwe"), 100);
                break;
            case "licenses-block":
                document.querySelector(".licenses-block").style.display = "flex";
                setTimeout(() => document.querySelector(".licenses-block").classList.add("qwe"), 100);
                
                break;
            case "awards-block":
                document.querySelector(".awards-block").style.display = "flex";
                setTimeout(() => document.querySelector(".awards-block").classList.add("qwe"), 100);
                 
                break;
            case "videos-block":
                document.querySelector(".videos-block").style.display = "flex";
                setTimeout(() => document.querySelector(".videos-block").classList.add("qwe"), 100);
                  
                break;
            case "parthers-block":
                document.querySelector(".parthers-block").style.display = "flex";
                setTimeout(() => document.querySelector(".parthers-block").classList.add("qwe"), 100);
                break;
        }
        companyNavItems[i].classList.add("active-item")
    };
}

document.querySelector(".swiper-wrapper").onclick = function () {
    var bg =  document.querySelector(".swiper-slide-active").style.backgroundImage
    bg = bg.replace('url(', '').replace(')', '').replace(/\"/gi, "");
    
    document.querySelector(".img-popup-wrap").style.top = `${window.pageYOffset}px`
    document.querySelector(".img-popup-wrap").style.display = "flex"
    document.querySelector("body").style.overflow = "hidden"
    document.querySelector(".img-popup").setAttribute("src", bg)
}
document.querySelector(".img-popup-wrap").onclick = function () {
    document.querySelector("body").style.overflow = "auto"
    document.querySelector(".img-popup-wrap").style.display = "none"
}

var elementsLeader = document.querySelectorAll(".img-leader");
for (var i = 0; i < elementsLeader.length; i++) {
    elementsLeader[i].onclick = function () {
    //   console.log(this.children)
    var bg = this.getAttribute("src")
      
    document.querySelector(".img-popup-wrap").style.top = `${window.pageYOffset}px`
    document.querySelector(".img-popup-wrap").style.display = "flex"
    document.querySelector("body").style.overflow = "hidden"
    document.querySelector(".img-popup").setAttribute("src", bg)
  };
}

var elementsAward = document.querySelectorAll(".img-award");
for (var i = 0; i < elementsAward.length; i++) {
  elementsAward[i].onclick = function(){
      var bg = this.getAttribute("src")

    document.querySelector(".img-popup-wrap").style.top = `${window.pageYOffset}px`
    document.querySelector(".img-popup-wrap").style.display = "flex"
    document.querySelector("body").style.overflow = "hidden"
    document.querySelector(".img-popup").setAttribute("src", bg)
  };
}

var elementsAward = document.querySelectorAll(".document-img");
for (var i = 0; i < elementsAward.length; i++) {
  elementsAward[i].onclick = function(){
      var bg = this.getAttribute("src")

    document.querySelector(".img-popup-wrap").style.top = `${window.pageYOffset}px`
    document.querySelector(".img-popup-wrap").style.display = "flex"
    document.querySelector("body").style.overflow = "hidden"
    document.querySelector(".img-popup").setAttribute("src", bg)
  };
}


