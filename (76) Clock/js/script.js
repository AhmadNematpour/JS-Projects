
const clock = document.querySelectorAll('.clock .hand');
const hour = document.getElementById('hour');
const minute = document.getElementById('minuts');
const seconds = document.getElementById('seconds');

let set_clock = setInterval(()=> {

    let date_now = new Date();
    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();
    let hr_calc = (hr * 30) + (min / 2);
    let min_calc = (min * 6) + (sec / 5);
    let sec_calc = sec * 6;

    seconds.style.transform = `rotate(${sec_calc}deg)`;
    minute.style.transform = `rotate(${min_calc}deg)`;
    hour.style.transform = `rotate(${hr_calc}deg)`;
    
}, 1000)















