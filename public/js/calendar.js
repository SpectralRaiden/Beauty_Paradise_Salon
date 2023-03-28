let now = Date.now();
let oneDay = 60*60*24*1000;
let thisMonth = new Date(now).getMonth();

while (thisMonth == new Date().getMonth()) {
    calendar.innerHTML += `<div class="date">${new Date(now).toDateString()}</div>`;
    now+=oneDay;
    thisMonth = new Date(now).getMonth();
}

