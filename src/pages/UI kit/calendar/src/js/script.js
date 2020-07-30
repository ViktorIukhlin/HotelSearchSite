'use strict';

const parentDays = document.querySelector('.calendar__daysOftheMonth'),
      numbers = document.querySelectorAll('.calendar__daysOftheMonth');

for(let i = 0; i < 35; i++){
    parentDays.innerHTML+=`<div class="calendar__number">${i-2}</div>`;
}

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        e.target.classList.toggle('calendar__number_active');
    });

});