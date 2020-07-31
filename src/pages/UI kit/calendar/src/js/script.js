'use strict';

const numbers = document.querySelectorAll('.calendar__daysOftheMonth'),
    clear = document.querySelector('.calendar__clear'),
    apply = document.querySelector('.calendar__sumbit'),
    date = new Date();

const renderCalendar = () => {
    date.setDate(1);
    document.querySelector('.calendar__monthYear h3').innerHTML = '';
    document.querySelector('.calendar__daysOftheMonth').innerHTML = '';

    const monthDays = document.querySelector('.calendar__daysOftheMonth'),
        lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
        prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    let firstDayIndex = date.getDay() - 1; if (firstDayIndex == -1) { firstDayIndex = 6; }
    const lastDatIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay(),
        nextDays = 7 - lastDatIndex;
    
    const months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ];

    document.querySelector('.calendar__monthYear h3').innerHTML += `${months[date.getMonth()]} ${date.getFullYear()}`;

    for (let x = firstDayIndex; x > 0; x--) {
        monthDays.innerHTML += `<div data-day class="calendar__number calendar__priev-date">${prevLastDay - x + 1}</div>`;
    }
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
            monthDays.innerHTML += `<div data-day class="calendar__number calendar__number_today">${i}</div>`;
        } else {
            monthDays.innerHTML += `<div data-day class="calendar__number">${i}</div>`;
        }
    }
    for (let j = 1; j <= nextDays; j++) {
        monthDays.innerHTML += `<div data-day class="calendar__number calendar__next-date">${j}</div>`;
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
};

document.querySelector('.calendar__nav').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector('.calendar__nav_right').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();





