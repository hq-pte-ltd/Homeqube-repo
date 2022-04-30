const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const days_nft = document.getElementById('days-nft');
const hours_nft = document.getElementById('hours-nft');
const minutes_nft = document.getElementById('minutes-nft');
const seconds_nft = document.getElementById('seconds-nft');



const releaseTime = new Date('August 3, 2022 12:00:00');
const releaseTimeNFT = new Date('June 22, 2022 12:00:00');

function updateCountdowntime(){
    const currentTime = new Date();
    const diff = releaseTime - currentTime;
    // console.log(diff);

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000 ) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h: h;
    minutes.innerHTML = m < 10 ? '0' + m: m;
    seconds.innerHTML = s < 10 ? '0' + s: s;
}

function updateCountdowntimeNFT(){
    const currentTime = new Date();
    const diff = releaseTimeNFT - currentTime;
    // console.log(diff);

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000 ) % 60;

    days_nft.innerHTML = d;
    hours_nft.innerHTML = h < 10 ? '0' + h: h;
    minutes_nft.innerHTML = m < 10 ? '0' + m: m;
    seconds_nft.innerHTML = s < 10 ? '0' + s: s;
}



setInterval(updateCountdowntime, 1000)
setInterval(updateCountdowntimeNFT, 1000)