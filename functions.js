let arrOfImage=["https://wallpaperhook.com/wp-content/uploads/2020/11/The-Avengers-Wallpapers-26-From-WallpaperHook.com-For-Free.jpg"
,"https://wallpaperaccess.com/full/240159.jpg","https://www.wallpaperbetter.com/wallpaper/337/664/900/captain-america-shield-marvel-chris-evans-hd-720P-wallpaper.jpg","https://c4.wallpaperflare.com/wallpaper/719/640/12/marvel-comics-the-avengers-spider-man-avengers-infinity-war-wallpaper-preview.jpg","https://c4.wallpaperflare.com/wallpaper/1017/584/846/avengers-age-of-ultron-the-avengers-thor-hulk-wallpaper-preview.jpg"]

let index=0;
let initial;
let timer;
let images=document.querySelector('img');
initial=function(){
    images.src=arrOfImage[index];
    index++;
    index=index%(arrOfImage.length)
    timer=setTimeout(initial,1000*2)
};
function next(){
    clearTimeout(timer);
    index++;
    index=index%(arrOfImage.length)
    images.src=arrOfImage[index]
}
function previous(){
    clearTimeout(timer);
    index--;
    if(index<0){
        index=2;
    }
    images.src=arrOfImage[index];
}
function mouse(){
    clearTimeout(timer);
}
function play(){
    initial();
}
document.onload(initial())

