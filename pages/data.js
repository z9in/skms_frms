
let year_el = document.querySelector('.year');
let mon_el = document.querySelector('.monthy');
let day_el = document.querySelector('.day');
let hour_el = document.querySelector('.hour');
let minit_el = document.querySelector('.minit');

setInterval(()=>{
    let dates = new Date()
    year_el.innerHTML = dates.getFullYear()+"년 ";
    mon_el.innerHTML = dates.getMonth()+1+"월 ";
    day_el.innerHTML = dates.getDate()+"일 ";
    hour_el.innerHTML = dates.getHours()+"시 ";
    if(dates.getMinutes()<10) {
        minit_el.innerHTML = "0"+dates.getMinutes()+"분";
    }else {
        minit_el.innerHTML = dates.getMinutes()+"분";
    }
},1000);

let user_name = document.querySelector('.userName');
let cookieArr = document.cookie.split('=')
user_name.innerHTML = cookieArr[1];
