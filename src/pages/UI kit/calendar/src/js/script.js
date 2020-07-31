'use strict';

const parentDays = document.querySelector('.calendar__daysOftheMonth'),
    numbers = document.querySelectorAll('.calendar__daysOftheMonth'),
    clear = document.querySelector('.calendar__clear'),
    apply = document.querySelector('.calendar__sumbit');

const data = new Date();

let dataNow = data.getDate();

while(dataNow >= 1){
    console.log(dataNow);
    dataNow--;
}

for (let i = 0; i < 35; i++) {
    parentDays.innerHTML += `<div data-day class="calendar__number">${i - 2}</div>`;
}
const days = document.querySelectorAll('[data-day]');


days.forEach(day => {
    day.addEventListener('click', () => {
        day.classList.toggle('calendar__number_active'); 
    });
});

clear.addEventListener('click', () => {
    days.forEach(day => {
        day.classList.remove("calendar__number_active");
    });
});

apply.addEventListener('click', () => {
        console.log(`Hello`);    
});
