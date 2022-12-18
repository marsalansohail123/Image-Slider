var img = document.getElementById("firstImg");
var parent = document.getElementById("parent");
var allImg = parent.getElementsByTagName("img");
var index = 0;

function next() {
    if (index == allImg.length) {
        img.src = './images/slider-1.jpg';
        index = index - 3;
    }
    else if (index == 0) {
        var url = allImg[0].src;
        img.src = url;
        index = index + 1;
    }
    else if (index == 1) {
        var url = allImg[1].src;
        img.src = url;
        index = index + 1;
    }
    else if (index == 2) {
        var url = allImg[2].src;
        img.src = url;
        index = index + 1;
    }
};

function prev() {
    if (index == 0) {
        var url = allImg[2].src;
        img.src = url;
        index = index + 3;
    }
    else if (index == 3) {
        var url = allImg[1].src;
        img.src = url;
        index = index - 1;
    } else if (index == 2) {
        var url = allImg[0].src;
        img.src = url;
        index = index - 1;
    } else if (index == 1) {
        var url = './images/slider-1.jpg';
        img.src = url;
        index = index - 1;
    }
}