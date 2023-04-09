
$(function () {
    for (i = 0; i < $("button").length; i++) {
        let move_count = 0;
        let open = 0;

        $("button").eq(i).on("click", function () {
            if (this.closest("div").className === "outter") {
                $(".outter").toggle();
                $(".inside").toggle();
            }
            else if (this.className === "search-btn") {
                $(".outter").toggle();
                $(".inside").toggle();
                console.log();
                window.scrollTo({
                    top: `${parseInt($(".shopping ").offset().top) + 1}`,
                    behavior: "smooth"
                });
            }
            else if (this.className === "inside-page1-close") {
                $(".outter").toggle();
                $(".inside").toggle();
            }
            else if (this.className === "button-main-6 exit") {
                $("#flipbook").toggle();
                $(".inside-page1").toggle();
            }
            else if (this.parentElement.className === "area") {
                console.log(this.className);
                $(".inside-page1").toggle();
                $("#flipbook").turn("page", 1);
                $("#flipbook").toggle();
            }

            else if (this.parentElement.className === "hard page p1 odd") {
                console.log(this.className);
                $(".inside-page1").toggle();
                $("#flipbook").toggle();
            }
            else if (this.parentElement.className === "inside-page3-rigth-top") {
                console.log(this.className);
                $(".inside-page1").toggle();
                $("#flipbook").toggle();
            }
            else if (this.className === "cookway-btn") {
                if (!move_count) {
                    move_count = 1;
                    $(".cookway").css({ "width": "300px", "background-size": "contain" });
                    $(".cookway div span").css({
                        "opacity": "1", "font-size": "1.8rem"
                    });
                    for (i = 0; i < 4; i++) {
                        $(".cookway span").eq(i).show();
                    }
                } else {
                    $(".cookway").css({ "width": "105px", "background-size": "cover" });
                    $(".cookway div span").css({ "opacity": "0", "font-size": ".5rem" });
                    move_count = 0;
                    for (i = 0; i < 4; i++) {
                        $(".cookway span").eq(i).hide();
                    }
                }
            }
            else if (this.className === "add-car") {
                let h = screen.height;
                let y = $(window).scrollTop();
                console.log(y);
                let name = this.closest("div").nextElementSibling.firstElementChild.innerText;
                let img = this.previousElementSibling.src;
                let light_box = $(".light-box");
                let aim_title = $(".add-card-top h4");
                $(".light-box").toggle();
                $(".light-box").css({ "left": "0px", "right": "0px", "margin": "auto", "top": `${y - 800}px`, "width": "100%", "heigth": `h*0.8` });
                aim_title.html(`${name}`);
                open = 1;
                switch (name) {
                    case "No.1 鬼頭刀":
                        $(".point").html("4");
                        $(".card-mid-img img").attr("src", `${img}`);
                        $(".price-1").html("250");
                        $(".price-2").html("300");
                        $(".price-3").html("350");
                        break;
                    case "No.2 文蛤":
                        $(".point").html("3.5");
                        $(".card-mid-img img").attr("src", `${img}`);
                        $(".price-1").html("30");
                        $(".price-2").html("40");
                        $(".price-3").html("50");
                        $(".size-s").html("小於5cm");
                        $(".size-m").html("5cm-7cm");
                        $(".size-l").html(">7cm");
                        break;
                    case "No.3 櫻花蝦":
                        $(".point").html("5");
                        $(".card-mid-img img").attr("src", `${img}`);
                        $(".price-1").html("10");
                        $(".price-2").html("20");
                        $(".price-3").html("30");
                        $(".size-s").html("小於1cm");
                        $(".size-m").html("1cm-1.5cm");
                        $(".size-l").html(">2cm");
                        break;
                    case "No.4 鎖管":
                        $(".point").html("4.5");
                        $(".card-mid-img img").attr("src", `${img}`);
                        $(".price-1").html("80");
                        $(".price-2").html("100");
                        $(".price-3").html("120");
                        $(".size-s").html("小於50g");
                        $(".size-m").html("50-90g");
                        $(".size-l").html(">90g");
                        break;
                    case "No.5 東方齒鰆":
                        $(".point").html("3.5");
                        $(".card-mid-img img").attr("src", `${img}`);
                        $(".price-1").html("70");
                        $(".price-2").html("80");
                        $(".price-3").html("90");
                        $(".size-s").html("小於500g");
                        $(".size-m").html("500-900g");
                        $(".size-l").html(">900g");
                        break;
                    case "No.6 白帶魚":
                        $(".point").html("4");
                        $(".card-mid-img img").attr("src", `${img}`);
                        $(".price-1").html("50");
                        $(".price-2").html("60");
                        $(".price-3").html("70");
                        $(".size-s").html("小於300g");
                        $(".size-m").html("300-700g");
                        $(".size-l").html(">700g");
                        break;
                }
            }
            else if (this.className === "add-card-mid-btn" || this.className === "back-shopping-list") {
                $(".light-box").toggle();
                open = 0;

            }
            else if (this.parentElement.className === "card-mid-select") {
                let current = $(".card-mid-select input").val();
                let size = $("#select-size option:selected").val();
                let showprice = $(".total-price").html();
                if (this.className === "plus") {
                    console.log("123");
                    current++;
                    $(".card-mid-select input").val(`${current}`);

                } else {
                    if (current > 0) {
                        current--;
                        $(".card-mid-select input").val(`${current}`);
                    }

                }
                switch (size) {
                    case "1":
                        showprice = $(".price-1").html() * current;
                        $(".total-price").html(`${showprice}`);
                        break;
                    case "2":
                        showprice = $(".price-2").html() * current;
                        $(".total-price").html(`${showprice}`);
                        break;
                    case "3":
                        showprice = $(".price-3").html() * current;
                        $(".total-price").html(`${showprice}`);
                        break;
                };

            }
        })
    }

    let width = $(this).width();
    if (width < 420) {
        $(".foot-main").css("display", "none");
        $(".wrapper footer a").css("display", "none");
        $("#flipbook").turn({
            width: 380,
            height: 500,
            elevation: 50,
            gradients: true,
            display: "single",
            page: 5
        });
        for (i = 0; i < $(".inside-page2-left-locate ul li").length; i++) {
            let origin_left = parseInt($(".inside-page2-left-locate ul li").eq(i).css("left")) - 18;
            $(".inside-page2-left-locate ul li").eq(i).css("left", `${origin_left}px`);
        };
        for (i = 0; i < $(".inside-page2-rigth-locate ul li").length; i++) {
            let origin_left = parseInt($(".inside-page2-rigth-locate ul li").eq(i).css("left")) - 18;
            $(".inside-page2-rigth-locate ul li").eq(i).css("left", `${origin_left}px`);
        };
        for (i = 0; i < $(".inside-page3-left-locate ul li").length; i++) {
            let origin_left = parseInt($(".inside-page3-left-locate ul li").eq(i).css("left")) - 18;
            $(".inside-page3-left-locate ul li").eq(i).css("left", `${origin_left}px`);
        }

    } else {
        $("#flipbook").turn({
            width: 800,
            height: 500,
            elevation: 50,
            gradients: true,
            page: 5
        });
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
let count = 0;
setInterval(function () {
    if (!count) {
        $(".click-mov").attr("src", "../image/shoping_cen/click2.png");
        count = 1;
    } else {
        $(".click-mov").attr("src", "../image/shoping_cen/click.png");
        count = 0;
    }

}, 500);

$(".click-mov").mouseover(function () {
    $(".click").toggle();
});
$(".click-mov").mouseout(function () {
    $(".click").toggle();
});


