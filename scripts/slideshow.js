let pic = setInterval(changepic, 2000);
let backgroundColors = ['#caf0f8', '#ade8f4', '#90e0ef', '#48cae4', '#00b4d8', '#0096c7'];
let idx = 1;

function modify(imgid)
{
    document.getElementById("a").src = document.getElementById(imgid).src;
}

function changepic() {
    let x = document.getElementById("a").src;
    let slash = x.lastIndexOf("/");
    let path = x.substring(0,slash+1);
    let fname = x.substring(slash+1,x.length);
    let dot = fname.indexOf(".");
    let img = parseInt(fname.substring(0,dot));
    img = (img % 6) + 1;
    let newimg = path + img + ".jpg";
    document.getElementById("a").src = newimg;

    document.body.style.backgroundColor = backgroundColors[(idx++) % 6];
}

function pauseSlideShow() {
    clearInterval(pic);
}

function right() {
    // pauseSlideShow();
    let x = document.getElementById("a").src;
    let slash = x.lastIndexOf("/");
    let path = x.substring(0,slash+1);
    let fname = x.substring(slash+1,x.length);
    let dot = fname.indexOf(".");
    let img = parseInt(fname.substring(0,dot));
    img++;
    console.log(img);
    if (img === 6)
        img = 1;
    let newimg = path + img + ".jpg";
    document.getElementById("a").src = newimg;
}

function left() {
    // pauseSlideShow();
    let x = document.getElementById("a").src;
    let slash = x.lastIndexOf("/");
    let path = x.substring(0,slash+1);
    let fname = x.substring(slash+1,x.length);
    let dot = fname.indexOf(".");
    let img = parseInt(fname.substring(0,dot));
    img--;
    console.log(img);
    if (img === 0)
        img = 6;
    let newimg = path + img + ".jpg";
    document.getElementById("a").src = newimg;
}