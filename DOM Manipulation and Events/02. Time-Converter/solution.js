function attachEventsListeners() {
    let btns = document.querySelectorAll('input[type="button"]')
    let days = document.getElementById('days')
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')

    let ratio = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }


    Array.from(btns).map(x => x.addEventListener('click', (e) => {
        console.log(e.target.id);
        if (e.target.id == 'daysBtn') {
            hours.value = days.value * ratio.hours;
            minutes.value = days.value * ratio.minutes;
            seconds.value = days.value * ratio.seconds;
        } else if (e.target.id == 'hoursBtn') {
            days.value = hours.value / ratio.hours;
            minutes.value = hours.value * (ratio.minutes / ratio.hours);
            seconds.value = minutes.value * 60;
        } else if (e.target.id == 'minutesBtn') {
            days.value = minutes.value / ratio.minutes;
            hours.value = minutes.value * (ratio.hours / ratio.minutes);
            seconds.value = minutes.value * 60;
        } else if (e.target.id == 'secondsBtn') {
            days.value = seconds.value / ratio.seconds;
            hours.value = days.value *ratio.hours
            minutes.value = seconds.value / 60
        }

    }))
}