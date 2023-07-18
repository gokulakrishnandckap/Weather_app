const result = document.querySelector(".result")
const tag = document.querySelector(".icons")
const submit = document.querySelector(".submit")
const time = document.querySelector(".time")
const inp = document.querySelector("input")

window.addEventListener("DOMContentLoaded", () => weatherReport())

submit.addEventListener("click", () => weatherReport())

function weatherReport(){
    let link = inp.value === "" ? "https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=d155da8fa4a20d79453b73bd3ce86aff" : "https://api.openweathermap.org/data/2.5/weather?q="+inp.value+"&appid=d155da8fa4a20d79453b73bd3ce86aff"
    fetch(link)
    .then(res => res.json())
    .then(json => {
        let icons = json.weather
        console.log(json.timezone);
        let tempture = json.main.temp
        let cel = tempture - 273.15
        result.innerHTML = `<h1>${Math.round(cel)}<span>&#8451;</span></h1>
                        <h2>Location: ${json.name}</h2>`
        let list = icons.map((item) =>
            `<img src="http://openweathermap.org/img/w/${item.icon}.png">`
        )
        tag.innerHTML = list
        let zone = new Date().toLocaleString(json.timezone)
        time.innerHTML = `<h2>Time: ${zone.slice(-9)}</h2>`
        inp.value = ""
    })
}
