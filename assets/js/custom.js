let openMenuIcon = document.querySelector(".openMenubtn");
let nav__wrapper = document.querySelector(".navWrapper");
let closeMenuBtn = document.querySelector(".closeBtn");


openMenuIcon.addEventListener("click", function () {
    nav__wrapper.classList.add("slidein")
    document.body.classList.add("lock-scroll")

});
closeMenuBtn.addEventListener("click", function () {
    nav__wrapper.classList.remove("slidein")
    document.body.classList.remove("lock-scroll")
});
console.log("working");



var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onYouTubeIframeAPIReady() {
    $('.youtube-video').inViewAutoplay({
        autohide: 1,
        modestbranding: 1,
        rel: 0,
        quality: 'hd720',
        controls: 0,
        showinfo: 0
    });
    $('.youtube-video-second').inViewAutoplay({
        autohide: 1,
        modestbranding: 1,
        rel: 0,
        quality: 'hd720',
        controls: 0,
        showinfo: 0
    });

}