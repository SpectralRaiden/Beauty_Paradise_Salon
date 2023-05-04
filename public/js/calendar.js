let now = Date.now();
let oneDay = 60 * 60 * 24 * 1000;
let thisMonth = new Date(now).getMonth();

while (thisMonth == new Date().getMonth()) {
    let day = new Date(now);


    calendar.innerHTML += `
        <div class="date" onclick="handleDay(${now})">
            <h5><b>${day.getDate()}</b></h5>
        
        </div>
    `;
    now += oneDay;
    thisMonth = new Date(now).getMonth();
}

const handleDay = d => {
    let day = new Date(d).toDateString();
    calendar.innerHTML = `
        <div class="day">
                <h1>${day}</h1>
        </div>
    `;

    for (let i = 1; i < 25; i++) {
        document.querySelector('.day').innerHTML += `<h3>${i} <input /></h3>`

    };
};
