const button = document.getElementById('but');
const input = document.getElementById('location');
const temp = document.getElementById('temp');
const place = document.getElementById('place');
const summary = document.getElementById('summary');
const pic1 = document.getElementById('image');

button.addEventListener('click', async () => {
    place.innerHTML= "<img src='./loading1.gif' />"
    summary.textContent= " ";
    temp.textContent = " ";
    pic1.innerHTML = " ";


    let response = await fetch(`/weather?location=${input.value}`);
    let data = await response.json();
    summary.textContent = data.summary;
    pic1.innerHTML = data.icon;
    place.textContent = data.place;
    temp.textContent = `${data.temp}°C`
})





