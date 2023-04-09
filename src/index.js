const navto = document.getElementsByClassName("navigator-ol-a");
const wrapper = document.getElementsByTagName("body");
const head = document.getElementsByTagName("header");
const toTop = document.querySelector(".to-top button");
const animation_star = document.querySelector(".animation-star ul");
const fisrt_bg = document.querySelector(".fisrt_page");
let accuT = 0;
let accuL = 300;
console.log(animation_star.querySelectorAll("li")[0].style.top);



let starmove = setInterval(() => {
    accuT += 2;
    accuL += 30;
    for (i = 0; i < 4; i++) {

        if (accuT == -150 || accuL >= 1200) {
            window.clearInterval(starmove);
            animation_star.querySelectorAll("li")[i].style.display = "none";
        }
        animation_star.querySelectorAll("li")[i].style.top = `${accuT}px`;
        animation_star.querySelectorAll("li")[i].style.left = `${accuL}px`;
    }
}, 30);
let bgTurn = setInterval(function () {
    if (fisrt_bg.classList.contains("morning")) {
        fisrt_bg.classList.remove("morning");
        fisrt_bg.classList.add("noon");

    } else if (fisrt_bg.classList.contains("noon")) {
        fisrt_bg.classList.remove("noon");
        fisrt_bg.classList.add("night");
        fisrt_bg.querySelector("h1").style.color = "#fff";
        fisrt_bg.querySelector("h1").style.transition = "5s";
        fisrt_bg.querySelector("p").style.color = "#fff";
        fisrt_bg.querySelector("p").style.transition = "5s";

    } else {
        fisrt_bg.classList.remove("night");
        fisrt_bg.classList.add("morning");
        fisrt_bg.querySelector("h1").style.color = "#000";
        fisrt_bg.querySelector("h1").style.transition = "3s";
        fisrt_bg.querySelector("p").style.color = "#000";
        fisrt_bg.querySelector("p").style.transition = "3s";



    }
}, 8000);

document.addEventListener("scroll", function () {

    if (scrollY > 350) {
        toTop.style.display = "block";
        toTop.style.top = `${scrollY + 450}px`;
    }

})
toTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
for (i = 0; i < navto.length; i++) {
    navto[i].addEventListener("click", function (e) {
        e.preventDefault();
        let link_id = this.getAttribute("id");
        let aim = document.querySelector(".wrapper section[data-id=" + link_id + "]");
        console.log(link_id, aim.offsetTop);
        let height = aim.offsetTop + head[0].clientHeight;
        window.scrollTo({
            top: height,
            behavior: "smooth"
        });
    })
}
//RWD function
$(function () {
    let width = $(this).width();
    if (width < 420) {
        $(".foot-main").css("display", "none");
        $(".wrapper footer a").css("display", "none");
    };
    $(window).on("resize", function () {
        let width = $(this).width();
        if (width < 420) {
            $(".foot-main").css("display", "none");
            $(".wrapper footer a").css("display", "none");

        };

    });
    let rotate = 0;
    $(".ham").on("click", function () {
        const toTop = document.querySelector(".to-top button");
        if (!rotate) {
            $(".ham-2").css("opacity", "0");
            $(".ham-2").toggle();
            $(".ham-1").css({ "rotate": "45deg", "background-color": "#29a6ff" });
            $(".ham-3").css({ "rotate": "-45deg", "background-color": "#29a6ff" });
            $("nav").slideToggle("slow");
            rotate = 1;
        } else {
            $(".ham-2").toggle();
            $(".ham-2").css("opacity", "1");
            $(".ham-1").css({ "rotate": "0deg", "background-color": "#000000" });
            $(".ham-3").css({ "rotate": "0deg", "background-color": "#000000" });
            $("nav").slideToggle("slow");
            rotate = 0;
        }

    });
})