setInterval(() => {
    d = new Date();
    var htime = d.getHours();
    var mtime = d.getMinutes();
    var stime = d.getSeconds();

    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

setInterval(() => {
    var htime = d.getHours();
    var mtime = d.getMinutes();
    var stime = d.getSeconds();
    var amorpm = "PM";

    if (htime <= 12) {
        amorpm = "AM";
    } else {
        amorpm = "PM";
    }
    if (htime > 12) {
        htime = htime % 12;
    } else if (htime < 10) {
        htime = "0" + htime;
    }
    if (mtime < 10) {
        mtime = "0" + mtime;
    }

    if (stime < 10) {
        stime = "0" + stime;
    }

    let text = document.getElementById("text");
    text.innerHTML = `${htime}:${mtime}:${stime} ${amorpm}`;

    // console.log(`${htime}:${mtime}:${stime}`);
}, 1000);
