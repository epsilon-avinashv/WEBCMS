$(document).ready(function () {
    $(".hamburger-icon").click(function () {
        $("#mylinks").toggle();
    });
});

var left, right, x, y;
var id;
var slideindex = 0;
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slider");
    var content1 = '{"heading":"Market Outlook 2018: Shifting Ice Cubes","para":"Inflation, trade wars and euro debt were among the potential headwinds for the world\'s economy in 2018, but that doesn\'t mean the overall global picture was necessarily a negative one","button":"EXPLORE THE YEAR BEFORE"}'
    var content2 = '{"heading":"Market Outlook 2019: Shifting Sands","para":"Inflation, trade wars and euro debt are among the potential headwinds for the world\'s economy in 2019, but that doesn\'t mean the overall global picture is necessarily a negative one","button":"EXPLORE THE YEAR AHEAD"}'
    var content3 = '{"heading":"Market Outlook 2020: Shifting Water","para":"Inflation, trade wars and euro debt are among the potential headwinds for the world\'s economy in 2019, but that doesn\'t mean the overall global picture will necessarily a negative one in the future","button":"EXPLORE THE FUTURE"}'

    var obj1 = JSON.parse(content1);
    var obj2 = JSON.parse(content2);
    var obj3 = JSON.parse(content3);
    var obj = [obj1, obj2, obj3];
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideindex++;
    if (slideindex > slides.length) {
        slideindex = 1;
    }
    if (left == true) {
        slideindex = x;
    }
    if (right == true) {
        slideindex = y;
    }
    slides[slideindex - 1].style.display = "block";
    document.getElementById("intro_header").innerHTML = obj[slideindex - 1].heading;
    document.getElementById("intro_para").innerHTML = obj[slideindex - 1].para;
    document.getElementById("btnText").innerHTML = obj[slideindex - 1].button;
    id = setTimeout(showSlides, 3000);
    left = false;
    right = false;
}
function leftarrow() {
    slideindex -= 1;
    if (slideindex < 1)
        slideindex = 3;
    x = slideindex;
    left = true;
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideindex - 1].style.display = "block";
    clearTimeout(id);
    id = setTimeout(showSlides, 2000);
    left = false;
}

function rightarrow() {
    slideindex += 1;
    if (slideindex > 3)
        slideindex = 1;
    y = slideindex;
    right = true;
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideindex - 1].style.display = "block";
    clearTimeout(id);
    id = setTimeout(showSlides, 2000);
    right = false;
}

