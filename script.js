let player = null;

function stream(link) {
    if (player) {
        player.destroy();
    }

    player = new Clappr.Player({
        parentId: '#player',
        width: '100%',
        height: '100%',
        source: link,
        autoPlay: true
    });
}

let upBt = document.getElementById("upBt");
upBt.addEventListener('click' , function (){
    window.scrollTo({
        top:0
    });
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        upBt.style.right = '10px';
        upBt.style.rotate = '0deg';
    } else {
        upBt.style.right = '-50px';
        upBt.style.rotate = '180deg';
    }
}); // ✅ This properly closes the scroll event function

// ad
let adBt = document.querySelector("#ad");
adBt.addEventListener("click", adPlay);

function adPlay() {
    alert('This is an ad\nLine 2 of the ad');
}

// Logo scroll function
window.addEventListener("scroll", function() {
    let logo = document.getElementById("logo") || document.getElementById("FloatLogo");

    if (window.scrollY >= 250 && logo.id === "logo") {
        logo.id = "FloatLogo";
    } else if (window.scrollY < 250 && logo.id === "FloatLogo") {
        logo.id = "logo";
    }
});