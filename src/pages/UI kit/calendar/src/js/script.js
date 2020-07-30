'use strict';

const parentDays = document.querySelector('.calendar__daysOftheMonth');

for(let i = 0; i < 35; i++){
    parentDays.innerHTML+=`<div class="calendar__number">${i-2}</div>`;
}