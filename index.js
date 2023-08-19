setInterval(() => {
    d = new Date()
    hourt = d.getHours()
    mint = d.getMinutes()
    sect = d.getSeconds()
    hrotate = 30 * hourt + mint / 2 
    minrotate = 6 * mint
    secrotate = 6 * sect

    hour.style.transform =`rotate(${hrotate}deg)`;
    min.style.transform = `rotate(${minrotate}deg)`;
    sec.style.transform = `rotate(${secrotate}deg)`;

}, 1000);

// setInterval(() => {
//     d = new Date();
//     htime = d.getHours();
//     mtime = d.getMinutes();
//     stime = d.getSeconds();
//     hrotation = 30*htime + mtime/2;
//     mrotation = 6*mtime;
//     srotation = 6*stime;

//     hour.style.transform = `rotate(${hrotation}deg)`;
//     min.style.transform = `rotate(${mrotation}deg)`;
//     sec.style.transform = `rotate(${srotation}deg)`;
// }, 1000);